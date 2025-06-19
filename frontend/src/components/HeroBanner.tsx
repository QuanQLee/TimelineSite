import { useEffect, useState } from 'react';
import ParallaxBanner from './ParallaxBanner';
import {
    DocumentArrowDownIcon,
    CodeBracketIcon,
    CpuChipIcon,
    ServerStackIcon,
    BeakerIcon,
} from '@heroicons/react/24/solid';

interface Props {
    src: string;
    overlayClassName?: string;
}

export default function HeroBanner({ src, overlayClassName }: Props) {
    const [resumeAvailable, setResumeAvailable] = useState(false);
    const techIcons = [CodeBracketIcon, CpuChipIcon, ServerStackIcon, BeakerIcon];

    useEffect(() => {
        fetch('/resume.pdf', { method: 'HEAD' })
            .then(res => setResumeAvailable(res.ok))
            .catch(() => setResumeAvailable(false));
    }, []);

    return (
        <div className="relative">
            <ParallaxBanner src={src} className="h-64 md:h-96" />
            <div
                className={`absolute inset-0 ${
                    overlayClassName || 'bg-gradient-to-br from-primary to-primary-dark opacity-80'
                }`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
                <h1 className="text-5xl font-extrabold">个人主页</h1>
                <div className="flex flex-wrap justify-center gap-4 opacity-70">
                    {techIcons.map((Icon, idx) => (
                        <Icon key={idx} className="w-8 h-8" />
                    ))}
                </div>
                {resumeAvailable && (
                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-lg flex items-center gap-2"
                    >
                        <DocumentArrowDownIcon className="w-5 h-5" />
                        下载简历
                    </a>
                )}
                <p className="text-sm opacity-90">邮箱：you@example.com ｜ 电话：123-456-7890</p>
            </div>
        </div>
    );
}
