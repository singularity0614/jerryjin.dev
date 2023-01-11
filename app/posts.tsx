import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(folderPath: string = 'blog') {
    const folderDirectory = path.join(postsDirectory, folderPath);

    // Get file names under /posts
    const fileNames = fs.readdirSync(folderDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(folderDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        let aa = (a as any).date.split('/').reverse().join();
        let bb = (b as any).date.split('/').reverse().join();
        return aa < bb ? 1 : (aa > bb ? -1 : 0);
    });
}

export function getAllPostIds(folderPath: string = 'blog') {
    const folderDirectory = path.join(postsDirectory, folderPath);

    const fileNames = fs.readdirSync(folderDirectory);

    return fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.md$/, ''),
        };
    });
}

export function getPostData(id: string, folderPath: string = '') {
    const fullPath = path.join(postsDirectory, folderPath, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Combine the data with the id
    return {
        id,
        content: matterResult.content,
        data: matterResult.data,
    };
}