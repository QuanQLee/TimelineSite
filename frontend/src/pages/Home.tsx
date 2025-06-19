import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    DocumentArrowDownIcon,
    CodeBracketIcon,
    CpuChipIcon,
    ServerStackIcon,
    BeakerIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
    const [resumeAvailable, setResumeAvailable] = useState(false);
    const techIcons = [CodeBracketIcon, CpuChipIcon, ServerStackIcon, BeakerIcon];

    useEffect(() => {
        fetch('/resume.pdf', { method: 'HEAD' })
            .then((res) => setResumeAvailable(res.ok))
            .catch(() => setResumeAvailable(false));
    }, []);
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
            <img
                src="/images/profile.jpg"
                alt="个人照片"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <h1 className="text-5xl font-extrabold">个人主页</h1>
            <div className="flex flex-wrap gap-4">
                {techIcons.map((Icon, idx) => (
                    <Icon key={idx} className="w-8 h-8 opacity-80" />
                ))}
            </div>
            {resumeAvailable && (
                <a
                    href="/resume.pdf"
                    download
                    className="mt-2 px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-lg flex items-center gap-2"
                >
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    下载简历
                </a>
            )}
            <Link
                to="/timeline"
                className="px-6 py-3 bg-primary-dark/80 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            >
                查看简介
            </Link>
            <p className="absolute bottom-4 text-sm opacity-90">
                邮箱：you@example.com ｜ 电话：123-456-7890
            </p>
        </div>
    );
}
