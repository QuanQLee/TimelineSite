import { Link } from 'react-router-dom';
import ParallaxBanner from '../components/ParallaxBanner';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            <ParallaxBanner src="/images/banner.jpg" className="h-64 md:h-96" />
            <div className="absolute inset-0 bg-primary-dark/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <img
                    src="/images/profile.jpg"
                    alt="个人照片"
                    className="w-40 h-40 rounded-full object-cover shadow-lg"
                />
                <h1 className="text-5xl font-extrabold">个人主页</h1>
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
        </div>
    );
}
