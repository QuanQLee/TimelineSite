// src/components/ParallaxBanner.tsx

import React from 'react';

// 1. props 类型声明（必须！）
interface ParallaxBannerProps {
    src: string;             // 背景图片地址
    className?: string;      // 可选：自定义 class
}

export default function ParallaxBanner({ src, className }: ParallaxBannerProps) {
    return (
        <div
            className={`w-full h-64 md:h-96 object-cover bg-center bg-cover rounded-xl mb-10 shadow ${className || ''}`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundAttachment: 'fixed',
            }}
            aria-label="banner"
        />
    );
}
