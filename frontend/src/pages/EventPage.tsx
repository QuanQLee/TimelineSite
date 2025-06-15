import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import Markdown from '../components/Markdown';
import ParallaxBanner from '../components/ParallaxBanner';

export default function EventPage() {
    const { id } = useParams();
    const evt = events.find(e => e.id === id);
    if (!evt) return <p className="p-6">事件不存在 <Link to="/timeline" className="underline">返回</Link></p>;
    return (
        <article className="min-h-screen bg-slate-50 dark:bg-slate-900 relative">
            {evt.cover && <ParallaxBanner src={evt.cover} />}
            <div className="relative max-w-2xl mx-auto pt-48 pb-20 px-4">
                <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">{evt.title}</h1>
                <p className="mb-8 text-slate-500 dark:text-slate-400">{evt.date}</p>
                <Markdown>{evt.description}</Markdown>
                <Link to="/timeline" className="block mt-12 text-primary underline">← 返回时间轴</Link>
            </div>
        </article>
    );
}