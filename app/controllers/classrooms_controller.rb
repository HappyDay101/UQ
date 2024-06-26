class ClassroomsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_classroom, only: [:show]
  before_action :set_classroom, only: [:show, :edit, :update, :destroy, :add_students, :new]




  def index
    session[:return_to] = request.fullpath
    @classrooms = policy_scope(Classroom)
    @active_tab = "classrooms"

  end

  def show
    set_classroom
    authorize @classroom
    @participants = @classroom.students
    @controller_name = controller_name
    @action_name = action_name
    @active_tab = "students"
    @classrooms = [@classroom]  # Ensure that @classrooms is set for the sidebar


    # Creates quiz scores for each seeded lesson
    @lessons_with_scores = @classrooms.map(&:lessons).flatten.map do |lesson|
      {lesson: lesson, quiz_score: rand(0..5)}
    end

    # Creates additional lessons on top of the seeded ones
    additional_lesson_titles = ["Oral Communication II", "Social Science", "Language Arts"]
    additional_lesson_titles.each do |title|
      @lessons_with_scores << { lesson: OpenStruct.new(title: title), quiz_score: rand(0..5) }
    end

    # Creates the individual student progress charts in the pop-up
    @chart_data = {}
    @lessons_with_scores.each do |lesson_result|
      @chart_data[lesson_result[:lesson].title] = lesson_result[:quiz_score]
    end

  end




  def new
    authorize Classroom
    @classroom = Classroom.new

  end

  def create
    authorize Classroom
    @classroom = current_user.classrooms.build(classroom_params)

    if @classroom.save
      # Create a chatroom associated with the new classroom
      Chatroom.create(name: 'General Chat', classroom: @classroom)

      redirect_to classrooms_path, notice: 'Classroom was successfully created.'
    else
      Rails.logger.error("Classroom creation failed: Errors - #{ @classroom.errors.full_messages }")
      render :new
    end
  end


  def add_students
    set_classroom
    # Authorize using the instance of @classroom and the action :add_students?
    authorize @classroom, :add_students?
    selected_student_ids = params.dig(:classroom, :student_ids) || []
    @classroom.students << User.find(selected_student_ids)

    redirect_to @classroom, notice: "Students added successfully."
  end




  private
  def set_classroom
    if params[:id] && action_name != 'new'
      @classroom = Classroom.find_by(id: params[:id])

      unless @classroom
        flash[:alert] = 'Classroom not found.'
        redirect_to classrooms_path
      end
    end
  end


  def classroom_params
    params.require(:classroom).permit(:name, :title)
  end

  def find_classroom
    @classroom = Classroom.find_by(id: params[:id])

    unless @classroom
      flash[:alert] = 'Classroom not found.'
      redirect_to classrooms_path
    end
  end

end
