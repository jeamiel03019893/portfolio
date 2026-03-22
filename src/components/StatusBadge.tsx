import { Radio, Server, Rocket, CircleCheck, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatusConfig = {
	icon: React.ElementType;
	className: string;
	pulse?: boolean;
};

const STATUS_CONFIG: Record<string, StatusConfig> = {
	'Live Production': {
		icon: Radio,
		className: 'text-green-400 bg-green-500/15 border border-green-500/30',
		pulse: true,
	},
	Production: {
		icon: Server,
		className: 'text-blue-400 bg-blue-500/15 border border-blue-500/30',
	},
	Deployed: {
		icon: Rocket,
		className: 'text-indigo-400 bg-indigo-500/15 border border-indigo-500/30',
	},
	Completed: {
		icon: CircleCheck,
		className: 'text-purple-400 bg-purple-500/15 border border-purple-500/30',
	},
	Beta: {
		icon: FlaskConical,
		className: 'text-amber-400 bg-amber-500/15 border border-amber-500/30',
	},
};

type Props = {
	status: string;
	className?: string;
};

export function StatusBadge({ status, className }: Props) {
	const config = STATUS_CONFIG[status];
	if (!config) return null;

	const Icon = config.icon;

	return (
		<span
			className={cn(
				'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
				config.className,
				className,
			)}
		>
			<Icon
				className={cn('h-3 w-3 shrink-0', config.pulse && 'animate-pulse')}
			/>
			{status}
		</span>
	);
}
