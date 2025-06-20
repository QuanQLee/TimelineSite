import { useEffect, useState } from 'react';
import ParallaxBanner from './ParallaxBanner';
import {
    DocumentArrowDownIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    ServerIcon,
    CloudIcon,
} from '@heroicons/react/24/solid';

interface Props {
    src: string;
    overlayClassName?: string;
}

export default function HeroBanner({ src, overlayClassName }: Props) {
    const [resumeAvailable, setResumeAvailable] = useState(false);
    const techIcons = [
        { Icon: ComputerDesktopIcon, label: 'Web 开发' },
        { Icon: DevicePhoneMobileIcon, label: '移动应用' },
        { Icon: ServerIcon, label: '后端服务' },
        { Icon: CloudIcon, label: '云部署' },
    ];

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
                <div className="flex flex-wrap justify-center gap-6 opacity-100">
                    {techIcons.map(({ Icon, label }, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <Icon className="w-8 h-8" />
                            <span className="text-xs mt-1">{label}</span>
                        </div>
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
                <p className="text-sm opacity-90">邮箱：309919702@qq.com ｜ 微信：The_5656</p>
            </div>
        </div>
    );
}
