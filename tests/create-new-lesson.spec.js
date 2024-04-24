import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Got page and login
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('abc@abc.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByLabel('Password').press('Enter');

  // Go to classrooms
  await page.getByRole('link', { name: 'Classrooms' }).click();
  // Go to class
  await page.locator('div').filter({ hasText: 'Class 2 - B' }).nth(4).click();
  // Create new lesson
  await page.getByRole('link', { name: '+ New Lesson' }).click();
  await page.getByLabel('Date').fill('2024-04-21');
  await page.locator('div').filter({ hasText: /^Title$/ }).click();
  await page.getByLabel('Title').fill('New Lesson Test');
  await page.getByPlaceholder('# Main headings\n --- \n ## Sub heading\n Content information \n---\n ##2nd Sub-headi').click();
  await page.getByPlaceholder('# Main headings\n --- \n ## Sub heading\n Content information \n---\n ##2nd Sub-headi').fill('# Present Perfect Continuous\n---\n## Understanding Continuous Actions in the Past\n---\nThe present perfect continuous tense is a verb form used to describe actions that began in the past, continue into the present, and may extend into the future. It is formed by combining the auxiliary verb "have" or "has" with "been" followed by the present participle (-ing form) of the main verb. For example, "I have been studying Japanese for two hours." This construction emphasizes the ongoing nature of the action or situation.\n---\n## Image of a clock or a person engaged in a continuous activity\n---\nThis tense is commonly used to highlight the duration or continuity of an action or situation. It is often employed when discussing ongoing activities or actions that have been in progress for some time. Additionally, it is frequently used with the prepositions "for" and "since" to indicate the duration of the action. For instance, "She has been working at the company since 2010" or "They have been traveling around the world for six months." Visual aids, such as timelines, can help illustrate how actions extend from the past into the present and potentially into the future, reinforcing the concept of ongoing activity.\n\n\n\n\n\n\n\n');
  await page.getByPlaceholder('# Main headings\n --- \n ## Sub heading\n Content information \n---\n ##2nd Sub-headi').click();
  await page.getByPlaceholder('# Main headings\n --- \n ## Sub heading\n Content information \n---\n ##2nd Sub-headi').click();
  await page.getByPlaceholder('# Main headings\n --- \n ## Sub heading\n Content information \n---\n ##2nd Sub-headi').click();
  await page.getByText('Create Lesson').click();
});
