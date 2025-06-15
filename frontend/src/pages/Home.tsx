import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary to-primary-dark text-white">
            <h1 className="text-5xl font-extrabold">身 份 和 简 历</h1>
            <p className="text-xl opacity-90">这里是我的个人介绍</p>
            <Link
                to="/timeline"
                className="px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            >
                查看简介
            </Link>
        </div>
    );
}