/* TimelinePage.tsx — v3.3 完整图片支持 */
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { events } from '../data/events';
import { motion } from 'framer-motion';
import {
    FlagIcon,
    RocketLaunchIcon,
    SparklesIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import Markdown from './Markdown';
import ParallaxBanner from './ParallaxBanner';

const icons: Record<string, JSX.Element> = {
    FlagIcon: <FlagIcon className="w-6 h-6" />,
    RocketLaunchIcon: <RocketLaunchIcon className="w-6 h-6" />,
    SparklesIcon: <SparklesIcon className="w-6 h-6" />,
};

export default function TimelinePage() {
    const navigate = useNavigate();

    return (
        <section className="parallax-wrapper min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            {events[0].cover && <ParallaxBanner src={events[0].cover} />}

            <motion.h1
                className="text-4xl font-bold mb-12 text-slate-800 dark:text-slate-100"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                项目大事记
            </motion.h1>

            <VerticalTimeline
                animate
                lineColor="#0ea5e9"
                className="timeline relative snap-y snap-mandatory"
            >
                {events
                    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
                    .map((e, idx) => (
                        <VerticalTimelineElement
                            key={`evt-${e.id}-${idx}`}
                            date={e.date}
                            contentStyle={{
                                background: '#fff',
                                borderTop: '4px solid #0ea5e9',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.25s, transform 0.25s',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #0ea5e9' }}
                            iconStyle={{ background: '#0ea5e9', color: '#fff' }}
                            icon={icons[e.icon ?? 'FlagIcon']}
                            className="snap-start group"
                        >
                            <motion.div
                                tabIndex={0}
                                role="button"
                                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                style={{ outline: 'none' }}
                                onClick={() => navigate(`/event/${e.id}`)}
                                onKeyDown={ev => {
                                    if (ev.key === 'Enter' || ev.key === ' ') {
                                        navigate(`/event/${e.id}`);
                                    }
                                }}
                                aria-label={`查看「${e.title}」详情`}
                            >
                                <Markdown>{`### ${e.title}\n\n${e.description}`}</Markdown>
                                {/* 新增：每条项目配图 */}
                                {e.image && (
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        className="mt-3 mb-2 max-w-xs max-h-40 rounded-lg shadow hover:scale-105 transition"
                                        style={{ objectFit: 'cover' }}
                                    />
                                )}
                            </motion.div>
                        </VerticalTimelineElement>
                    ))}
            </VerticalTimeline>
        </section>
    );
}
