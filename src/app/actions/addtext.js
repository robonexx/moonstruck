import { revalidatePath } from 'next/cache';  // if you want ISR refresh
import fs from 'fs/promises';
import path from 'path';

export default async function addText(message) {
  const filePath = path.join(process.cwd(), 'data', 'texts.json');

  // 1) Read the existing array
  const raw = await fs.readFile(filePath, 'utf8');
  const arr = JSON.parse(raw);

  // 2) Update it
  arr.push(message);

  // 3) Write it back
  await fs.writeFile(filePath, JSON.stringify(arr, null, 2), 'utf8');

  // 4) (Optional) revalidate any pages that read this data
  revalidatePath('/'); 
}
