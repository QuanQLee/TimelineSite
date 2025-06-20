// src/components/ParallaxBanner.tsx

import React from 'react';

// 1. props 类型声明（必须！）
interface ParallaxBannerProps {
    src: string; // 背景图片地址
    className?: string; // 可选：自定义 class
    contain?: boolean; // 使用 contain 以完整显示图片
}

export default function ParallaxBanner({ src, className, contain }: ParallaxBannerProps) {
    return (
        <div
            className={`w-full bg-center rounded-xl mb-10 shadow ${contain ? 'bg-contain bg-no-repeat' : 'bg-cover'} ${className || ''}`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundAttachment: 'fixed',
            }}
            aria-label="banner"
        />
    );
}
