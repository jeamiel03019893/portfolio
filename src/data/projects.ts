import repsshieldImg from '@/assets/img/projects/repsshield.jpg';
import agandjrealtyImg from '@/assets/img/projects/agandjrealty.jpg';

export type Project = {
	title: string;
	role: string;
	status?: string;
	gridSize?: 'featured' | 'secondary' | 'default';
	overview: string;
	highlights: string[];
	impact: string;
	stack: string[];
	image?: string;
	buttonLabel: string;
	demoUrl?: string;
};

export const projects: Project[] = [
	{
		title: 'REPSShield',
		role: 'Fullstack Developer - Contributor',
		status: 'Live Production',
		gridSize: 'secondary',
		overview:
			'A comprehensive time tracking platform for real estate professionals to maintain IRS REPS compliance. Integrates with Gmail, Google Calendar, and Microsoft Outlook to automatically capture and categorize work activities using AI-powered analysis.',
		highlights: [
			'Integrates with Gmail, Google Calendar, and Microsoft Outlook to automatically capture work activities',
			'AI-powered analysis categorizes activities for accurate compliance documentation',
			'Tracks and documents time to meet IRS Real Estate Professional Status (REPS) requirements',
		],
		impact: 'Helps real estate professionals accurately document their time to satisfy IRS compliance requirements.',
		stack: [
			'React 18',
			'Node.js',
			'Express',
			'TypeScript',
			'PostgreSQL 16',
			'Drizzle ORM',
			'Vercel AI SDK v4',
			'Stripe',
			'Capacitor.js',
			'Astro 5',
			'Cloudflare Workers',
			'Trigger.dev',
		],
		image: repsshieldImg,
		buttonLabel: 'Live Demo',
		demoUrl: 'https://repsshield.com/',
	},
	{
		title: 'AG&J Realty',
		role: 'Solo Developer',
		status: 'Live Production',
		gridSize: 'featured',
		overview:
			'Custom WordPress-powered real estate listing site for AG&J Realty. Built with a customized theme and MU plugins handling property management, agent profiles, front-end filtering, custom roles, and asset loading.',
		highlights: [
			'URL-driven property filtering via custom MU plugin — supports keyword/address search, taxonomy filters, sort order, and budget ceiling without any JS framework',
			'Custom `property_agent_manager` role with restricted WP admin access — agents manage only their own listings and media uploads; standard menus hidden, Media Library restricted to own uploads',
			'Property media gallery via Meta Box — images sorted before videos, passed to JS globals via wp_localize_script for in-browser rendering',
			'All frontend logic loaded as ES Modules — no bundler required; clean import/export structure across page-specific scripts',
		],
		impact: 'Enables AG&J Realty staff to manage property and agent content independently through a locked-down agent role, while visitors filter listings by type, keyword, address, and budget from the frontend.',
		stack: [
			'WordPress',
			'PHP',
			'Meta Box',
			'Vanilla JS',
			'LiteSpeed Cache',
			'Contact Form 7',
		],
		image: agandjrealtyImg,
		buttonLabel: 'Visit Page',
		demoUrl: 'https://agandjrealty.com/',
	},
	{
		title: 'Regulatory Report System',
		role: 'Solo Developer',
		status: 'Live Production',
		gridSize: 'secondary',
		overview:
			'Centralized compliance platform for generating and submitting regulatory reports — AG Grid data entry, entity code mapping, multi-level approval workflows, role-based access control via role templates, temporary permission grants with automatic expiry, and a custom MongoDB-backed Token Bucket rate limiter.',
		highlights: [
			'AG Grid for inline data entry with column filtering across large loan exposure datasets — handles the volume and structure of regulatory submissions',
			'Entity code mapping configuration — translates internal entity to regulator-assigned codes at report generation, keeping submissions compliant without manual lookups',
			'Reference data management — staff select from validated values, eliminating data entry errors',
			'Multi-level approval workflow: preparer, reviewer, and approver roles with full approval history',
			'Role templates with permissions + temporary permission grants with automatic expiry — access creep prevented by design',
			'Custom MongoDB-backed Token Bucket rate limiter (100 tokens/min global cap) with atomic aggregation pipeline — production-grade API protection',
		],
		impact: 'Centralizes regulatory report submissions with built-in controls ensuring accuracy and traceability for every report.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'TypeScript',
			'Mantine UI',
			'AG Grid',
			'MongoDB',
			'MSSQL',
			'JSZip',
			'Docker',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'Authentication Server',
		role: 'Solo Developer',
		status: 'Completed',
		overview:
			'Centralized JWT-based authentication service acting as the single sign-on point for all opt-in applications — issues and validates access and refresh tokens, password hashing, and an admin UI with AG Grid for cross-system user management.',
		highlights: [
			'Issues JWT access and refresh tokens for all opt-in applications — centralized token lifecycle (expiry, rotation, revocation) in one service',
			'Passwords hashed; tokens stored in httpOnly cookies to prevent XSS-based token theft',
			'React/Mantine admin UI with AG Grid for user management — create, update, and deactivate accounts across all opt-in applications from a single interface',
			'Cookie-based session management with separate access and refresh token expiry windows for secure, seamless re-authentication',
		],
		impact: 'Served as the authentication backbone for all opt-in applications, removing duplicated login logic from every individual application.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'Mantine UI',
			'AG Grid',
			'JWT',
			'bcrypt',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'Election Management System',
		role: 'Solo Developer',
		status: 'Completed',
		overview:
			'Candidate and member management platform with live elections — TypeScript backend with domain-driven modules, member registration and management, live election display client, real-time voting, bulk SMS notifications, and background jobs for automated system maintenance.',
		highlights: [
			'TypeScript backend with domain-driven module structure (auth, election, candidate, member, user-role, activity-log) — clear separation of concerns for a complex multi-feature system',
			'Dedicated React election display client deployed on event screens, showing live voting results separate from the admin interface',
			'Integrated third-party SMS gateway API for bulk notifications chunked at 30 per request to respect API rate limits, with full SMS log',
			'Background cleanup jobs using a custom polling utility for expired token and OTP removal — no third-party scheduler dependency',
			'Complete RBAC across all system roles: admin, election board, register, and observer',
		],
		impact: "Powers the organization's election operations — member registration, live elections, candidate management, and member communications — for the full membership.",
		stack: [
			'Node.js',
			'Express',
			'TypeScript',
			'React',
			'Mantine UI',
			'MongoDB',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'Queueing System',
		role: 'Solo Developer',
		status: 'Live Production',
		overview:
			'Real-time queue management system deployed across multiple counters — real-time WebSocket communication via Socket.io, customer-facing display with voice announcements, instant broadcast to all connected screens, and a dedicated control interface.',
		highlights: [
			'Real-time communication via Socket.io — queue state changes broadcast to all connected screens in under a second, no polling required',
			'Customer-facing queue display with circular countdown timer and browser-based voice synthesis for number announcements',
			'Counter interface for calling next number, issuing repeat calls, and managing counter state',
			'Single counter action updates all displays simultaneously via broadcast to every connected client',
		],
		impact: 'Deployed across multiple counters to manage customer queues in real time, reducing wait-time confusion and streamlining counter operations.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'Socket.io',
			'MongoDB',
			'Docker',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'Organization File Repository',
		role: 'Solo Developer',
		status: 'Live Production',
		overview:
			'Organization-wide document management system — category/subcategory/tags hierarchy with full-text search across all metadata, file versioning with modification history, and an immutable audit log on every file operation.',
		highlights: [
			'Category → subcategory → tags file hierarchy with accordion sidebar navigation — structured browsing plus tag-based cross-cutting discovery',
			'File versioning with full modification history preserved — older versions remain retrievable',
			'MongoDB compound text index on filename, type, category, subcategory, and tags — full-text search across all metadata',
			'In-browser file download — no separate file server required',
			'Immutable audit log with integrity verification on every file operation — upload, modify, download, and delete all recorded',
		],
		impact: 'Used organization-wide as the single source of truth for internal documents, forms, and official communications.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'TypeScript',
			'Mantine UI',
			'AG Grid',
			'MongoDB',
			'Multer',
			'Docker',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'ATM Reconciliation System',
		role: 'Solo Developer',
		status: 'Live Production',
		overview:
			'Reconciles ATM transactions from ZIP archives, categorizing entries by transaction type (cash withdrawals, balance inquiries, interbank fund transfers)',
		highlights: [
			'Parses ZIP archives and categorizes transaction types required for reconciliation',
			'Integrated with external banking data source for raw transaction feed processing with precise financial calculations to ensure accurate settlement figures.',
			'Spreadsheet-style data review via Handsontable — mirrors the Excel-based workflow staff already knew, reducing adoption friction',
			'Precise monetary calculations via BigNumber.js — eliminates floating-point rounding errors on financial totals',
			'Containerized via Docker Compose for consistent, reproducible deployments',
		],
		impact: 'Used daily to reconcile ATM transactions, replacing a manual Excel-based process.',
		stack: [
			'Node.js',
			'Express',
			'MongoDB',
			'Handsontable',
			'BigNumber.js',
			'adm-zip',
			'Docker',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'HR Management System',
		role: 'Solo Developer',
		status: 'Live Production',
		overview:
			'Comprehensive HR platform managing the full employee lifecycle — from onboarding and organizational structure to allowances, document storage, and HR reporting across 16 discrete modules.',
		highlights: [
			'16 HR modules: employee, department, designation, branch, allowance, civil status, cluster office, employment status, group, job category, location code, and more',
			'Document and attachment management — stores employee files (contracts, certificates, IDs) linked directly to employee records',
			'HR report generation for headcount, designations, and allowances — export-ready outputs for management and compliance',
			'Dual-layer audit logging: system log for all API actions; employee log for record-specific modifications',
		],
		impact: 'Serves as a single system of record for all employee data, from onboarding through the full employment lifecycle.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'Mantine UI',
			'MongoDB',
			'JWT',
			'Nginx',
			'Docker',
		],
		buttonLabel: 'Internal Project',
	},
	{
		title: 'SMS Notification System',
		role: 'Solo Developer',
		status: 'Live Production',
		overview:
			'Event-driven SMS alert platform that monitors multiple events by polling and automatically dispatches notifications to members and staff.',
		highlights: [
			'Multiple independently togglable event types',
			'Polling-based event detection tuned per event type',
			'AG Grid-powered notification log for real-time review in the React monitoring client',
		],
		impact: 'Automates customer and staff SMS alerts across multiple event types, eliminating manual notification workflows.',
		stack: [
			'Node.js',
			'Express',
			'React',
			'MongoDB',
			'Axios',
			'AG Grid',
			'Handsontable',
		],
		buttonLabel: 'Internal Project',
	},
];
