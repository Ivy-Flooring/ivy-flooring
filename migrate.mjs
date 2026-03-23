import fs from 'fs';

const getFiles = (dir, filesList = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const path = `${dir}/${file}`;
        if (fs.statSync(path).isDirectory()) {
            getFiles(path, filesList);
        } else if (path.endsWith('.tsx') || path.endsWith('.ts')) {
            filesList.push(path);
        }
    }
    return filesList;
}

const files = [...getFiles('app'), ...getFiles('src')];

const processFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // React Router replacements
    content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import Link from "next/link";');
    content = content.replace(/import\s*\{\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import { useRouter } from "next/navigation";');
    content = content.replace(/import\s*\{\s*useLocation\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import { usePathname } from "next/navigation";');
    content = content.replace(/import\s*\{\s*useParams\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import { useParams } from "next/navigation";');

    // Mixed imports like { useParams, Link }
    content = content.replace(/import\s*\{\s*(.*?),\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import { $1 } from "next/navigation";\nimport Link from "next/link";');
    content = content.replace(/import\s*\{\s*Link,\s*(.*?)\s*\}\s*from\s*['"]react-router-dom['"];?/g, 'import { $1 } from "next/navigation";\nimport Link from "next/link";');

    // Hooks
    content = content.replace(/useNavigate\(\)/g, 'useRouter()');
    content = content.replace(/useLocation\(\)/g, 'usePathname()');

    // NavLink special case handling string avoidance

    if (content.includes('react-router-dom') && !file.includes('NavLink')) {
        content = content.replace(/['"]react-router-dom['"]/g, '"next/navigation"');
    }

    // Add use client
    const needsClient = ['useState', 'useEffect', 'useRef', 'useRouter', 'usePathname', 'useParams', 'useForm', 'useQuery', 'framer-motion', 'react-hook-form'].some(hook => content.includes(hook));

    if (needsClient && !content.includes('"use client"')) {
        content = '"use client";\n\n' + content;
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}

files.forEach(processFile);
