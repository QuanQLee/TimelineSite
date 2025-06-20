// src/components/ParallaxBanner.tsx

import React from 'react';

// 1. props 类型声明（必须！）
interface ParallaxBannerProps {
    src: string;             // 背景图片地址
    className?: string;      // 可选：自定义 class
    fit?: 'cover' | 'contain'; // 背景适应方式
}

export default function ParallaxBanner({ src, className, fit = 'cover' }: ParallaxBannerProps) {
    return (
        <div
            className={`w-full bg-center bg-no-repeat rounded-xl mb-10 shadow ${
                fit === 'contain' ? 'bg-contain' : 'bg-cover'
            } ${className || ''}`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundAttachment: 'fixed',
            }}
            aria-label="banner"
        />
    );
}
