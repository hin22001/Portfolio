/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PortfolioProfile,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  TransferableStrength,
  SocialSkill,
  EducationItem,
  CertificationItem,
} from '../types/portfolio';

export const initialProfile: PortfolioProfile = {
  name: 'KaiSheng Zheng',
  title: 'IT Professional',
  headline: 'Practical experience. Technical foundations. A team-focused approach.',
  targetRoles: 'Seeking IT Roles (Systems Administration · Network Support · IT Infrastructure)',
  heroTagline: 'An IT professional who learns fast and ships',
  bio: 'I am targeting IT roles where I can apply my experience and continue developing my technical skills. Grounded in both hands-on hardware troubleshooting and enterprise network architecture, I bring reliable problem-solving and calm, user-first communication to technical operations.',
  strengthsAndGoals:
    'Dedicated to maintaining resilient IT infrastructure, automating administrative workflows, and delivering fast, empathetic user support to empower organizational productivity.',
  email: 'kaisheng.zheng.it@example.com',
  phone: '+1 (555) 382-9401',
  linkedin: 'linkedin.com/in/kaisheng-zheng-it',
  github: 'github.com/kaisheng-zheng',
  location: 'San Francisco Bay Area, CA (Open to Relocation / Hybrid)',
  status: 'Actively Available for Full-Time & Contract IT Roles',
  languages: [
    { name: 'English', proficiency: 'Professional / Bilingual Working Proficiency' },
    { name: 'Mandarin Chinese', proficiency: 'Native / Bilingual Working Proficiency' },
    { name: 'Cantonese', proficiency: 'Conversational Fluency' },
  ],
  interests: [
    'Custom PC Building & Hardware Thermal Tuning',
    'Homelab Server Virtualization (Proxmox VE & TrueNAS)',
    'Cybersecurity Capture-The-Flag (CTF) Challenges',
    'Network Cable Management & Clean Rack Staging',
    'Open-Source Automation Scripting & Self-Hosting',
  ],
};

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'IT Systems & Infrastructure Specialist',
    company: 'Apex Enterprise Solutions',
    location: 'San Jose, CA',
    period: '2024 – Present',
    type: 'Full-Time · On-Site',
    summary:
      'Lead day-to-day systems administration, endpoint lifecycle management, and network health monitoring across 350+ corporate workstations and internal server infrastructure.',
    responsibilities: [
      'Manage Active Directory Domain Services, Group Policy Objects (GPOs), and Microsoft 365 tenant administration for multi-department staff.',
      'Deploy, configure, and maintain Windows Server 2022 and Ubuntu Server instances hosting internal business applications.',
      'Maintain enterprise Wi-Fi (802.1x), VLAN trunking, and firewall rules on Cisco and Fortinet network appliances.',
      'Implement standardized workstation imaging and rapid endpoint provisioning using MDT and PowerShell automation.',
    ],
    keyResult:
      'Reduced average workstation deployment time from 4.5 hours to 35 minutes and improved first-touch ticket resolution to 86%.',
    technologies: ['Active Directory', 'Windows Server 2022', 'Cisco IOS', 'PowerShell', 'Microsoft 365', 'Fortinet FortiGate'],
  },
  {
    id: 'exp-2',
    role: 'Network & Systems Support Associate',
    company: 'Metro Tech Infrastructure Partners',
    location: 'Oakland, CA',
    period: '2023 – 2024',
    type: 'Contract · Hybrid',
    summary:
      'Maintained campus network infrastructure, performed structured cabling, and diagnosed physical and logical networking bottlenecks.',
    responsibilities: [
      'Configured Cisco Catalyst managed switches, provisioned VLAN tags, access ports, and static DHCP bindings.',
      'Executed server rack re-patching and cable management for 4 server enclosures, creating detailed Visio patch diagrams.',
      'Monitored network latency, interface packet drops, and switch port errors using SNMP and Wireshark traffic captures.',
      'Conducted onsite hardware diagnostics, PSU testing, RAM swap-outs, and motherboard replacements.',
    ],
    keyResult:
      'Successfully migrated core rack equipment during scheduled maintenance windows with zero unplanned network outages.',
    technologies: ['Cisco Catalyst', 'Wireshark', 'VLAN / 802.1Q', 'SNMP', 'Structured Cabling (Cat6a)', 'Hardware Bench Diagnostics'],
  },
  {
    id: 'exp-3',
    role: 'IT Service Desk Specialist',
    company: 'University Academic Technology Center',
    location: 'San Francisco, CA',
    period: '2022 – 2023',
    type: 'Part-Time / Academic',
    summary:
      'Provided frontline Tier-1 and Tier-2 technical support to 1,200+ students, faculty, and administrative staff across campus labs and offices.',
    responsibilities: [
      'Triaged and resolved 850+ support tickets for Windows, macOS, and Linux hardware issues, malware removal, and VPN access.',
      'Administered user account credentials, MFA resets, and file permission grants within Active Directory and Azure AD.',
      'Assisted in maintaining 8 computer labs including peripheral maintenance, printer queues, and disk imaging.',
      'Authored 18 step-by-step knowledge base articles that resolved top-recurring user connection issues.',
    ],
    keyResult:
      'Earned a 98.4% positive satisfaction rating across 500+ surveyed incident tickets and reduced recurring VPN tickets by 30%.',
    technologies: ['Jira Service Management', 'Active Directory', 'macOS & Windows 11', 'VPN / OpenVPN', 'Disk Imaging', 'Remote Desktop (RDP)'],
  },
];

export const transferableStrengths: TransferableStrength[] = [
  {
    title: 'Problem solving',
    quote: 'I work through practical problems under real deadlines, keeping the immediate need and the next action in view.',
    practicalApplication:
      'When critical systems or network links degrade, I isolate root causes methodically—from physical layer connectivity through DNS, firewall, and application layers—while keeping stakeholders informed and downtime minimal.',
    impact: 'Consistently resolves high-pressure outages without panic or hasty assumptions, prioritizing rapid recovery followed by post-mortem hardening.',
  },
  {
    title: 'People and systems',
    quote: 'I work with users, teammates, and systems, connecting technical tasks with the people who depend on them.',
    practicalApplication:
      'IT exists to enable human beings. I translate complex technical constraints into clear, reassuring guidance for non-technical users while coordinating seamlessly with senior engineers and management.',
    impact: 'Bridges the gap between complex infrastructure requirements and everyday employee workflows, elevating team trust and adoption.',
  },
  {
    title: 'Adaptability',
    quote: 'I adapt quickly to new tools and environments, learning what the setting requires and putting it into practice.',
    practicalApplication:
      'Whether transitioning from on-premises Active Directory to hybrid Entra ID, adopting a new ticketing system, or configuring unfamiliar network equipment, I read documentation swiftly, experiment in labs, and become proficient on day one.',
    impact: 'Rapid onboarding cycle with zero hand-holding required when integrating new vendor hardware or software stacks.',
  },
];

export const socialSkills: SocialSkill[] = [
  {
    title: 'Clear communication',
    quote: 'I communicate clearly with technical and non-technical people, adjusting the explanation to the audience.',
    workplaceExample:
      'Converts intricate network routing anomalies into intuitive status briefings for department heads while drafting precise technical documentation for systems engineers.',
  },
  {
    title: 'Collaboration and reliability',
    quote: 'I collaborate with teammates and take responsibility for my commitments.',
    workplaceExample:
      'Proactively volunteers for on-call shift coverage, tracks pending ticket tasks to verifiable completion, and backs up peers during complex infrastructure migrations.',
  },
  {
    title: 'Patience and empathy',
    quote: 'I listen carefully and stay patient when supporting users.',
    workplaceExample:
      'Treats every frustrated user with respect, active listening, and calm demeanor, turning tense troubleshooting sessions into positive, confidence-building experiences.',
  },
  {
    title: 'Initiative and feedback',
    quote: 'I take initiative and remain open to feedback that improves my work.',
    workplaceExample:
      'Continuously asks for constructive code and configuration reviews, incorporating senior engineer insights into personal scripts and procedures.',
  },
];

export const technicalSkills: SkillCategory[] = [
  {
    title: 'Systems and networks',
    description: 'Enterprise server administration, IP networking, and virtualization platforms',
    skills: [
      { name: 'Active Directory & GPO', level: 'Advanced', context: 'Domain forest administration, OU structuring, group policy object deployment' },
      { name: 'Windows Server 2019/2022', level: 'Advanced', context: 'Roles (DNS, DHCP, IIS, Print Server), WSUS, storage pools' },
      { name: 'Linux (Ubuntu, Debian, RHEL)', level: 'Advanced', context: 'Systemd, SSH hardening, iptables/UFW, cron automation, package maintenance' },
      { name: 'TCP/IP, Subnetting & Routing', level: 'Advanced', context: 'IPv4/IPv6 CIDR calculations, static routing, gateway redundancy' },
      { name: 'VLANs & 802.1Q Trunking', level: 'Proficient', context: 'Port isolation, inter-VLAN routing on Layer 3 switches, tagging' },
      { name: 'Firewalls & pfSense / OPNsense', level: 'Proficient', context: 'NAT, stateful packet filtering, DMZ segmentation, rule optimization' },
      { name: 'VMware ESXi & Proxmox VE', level: 'Proficient', context: 'Hypervisor clustering, VM provisioning, resource scheduling, snapshot trees' },
      { name: 'Docker & Containerization', level: 'Proficient', context: 'Dockerfile creation, compose files, bridge networks, persistent volumes' },
    ],
  },
  {
    title: 'Programming and tools',
    description: 'Scripting languages, source control, and administrative toolkits',
    skills: [
      { name: 'PowerShell Automation', level: 'Advanced', context: 'Bulk user onboarding scripts, AD auditing, endpoint configuration sweeps' },
      { name: 'Bash & Shell Scripting', level: 'Advanced', context: 'Server health checks, log rotation, automated backup rsync pipelines' },
      { name: 'Python for IT Ops', level: 'Proficient', context: 'REST API integrations, CSV data parsing, automated uptime alerting' },
      { name: 'Git & GitHub', level: 'Proficient', context: 'Version control for infrastructure code, configs, and automation scripts' },
      { name: 'SQL & Database Queries', level: 'Familiar', context: 'PostgreSQL & MySQL basic schema inspection, reporting queries, backup dumps' },
      { name: 'Postman & REST APIs', level: 'Proficient', context: 'Testing SaaS and cloud API webhooks for identity and ticketing integration' },
      { name: 'WireGuard & OpenVPN', level: 'Advanced', context: 'Site-to-site tunnels, split-tunnel client access, key management' },
    ],
  },
  {
    title: 'Support and troubleshooting',
    description: 'Hardware diagnostics, service management, and recovery methodologies',
    skills: [
      { name: 'Hardware Diagnostics & Repair', level: 'Advanced', context: 'Motherboard, CPU, RAM, PSU load testing, thermal paste repasting' },
      { name: 'Ticketing (ServiceNow & Jira)', level: 'Advanced', context: 'SLA adherence, ITIL-aligned incident tracking, escalation workflows' },
      { name: 'Remote Desktop & Administration', level: 'Advanced', context: 'RDP, SSH tunneling, Quick Assist, AnyDesk secure fleet management' },
      { name: 'Backup & Disaster Recovery', level: 'Proficient', context: 'Veeam Backup & Replication, 3-2-1 backup strategy, ZFS snapshot replication' },
      { name: 'OS Deployment (MDT / PXE)', level: 'Advanced', context: 'Automated gold image capture, driver injection, sysprep deployment' },
      { name: 'Root-Cause Analysis & SOPs', level: 'Advanced', context: 'Incident retrospectives, formal runbooks, end-user self-help manuals' },
    ],
  },
];

export const selectedProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Campus Network Segmentation & 802.1Q VLAN Deployment',
    category: 'Infrastructure',
    summary:
      'Designed and executed a full network isolation architecture separating staff workstations, server infrastructure, IoT devices, and guest access across 12 managed Cisco switches.',
    contribution:
      'Mapped all physical switch ports, designed the 4-VLAN subnet hierarchy, staged Layer-3 inter-VLAN routing on core switches, and configured strict pfSense firewall ACL rules preventing untrusted guest packets from discovering internal hosts.',
    outcome:
      'Eliminated broadcast storm risks, passed enterprise third-party security audits with zero findings, and completed migration during an overnight weekend window with zero unplanned downtime.',
    metrics: [
      { label: 'Broadcast Traffic', value: '-38%' },
      { label: 'Unscheduled Downtime', value: '0 hrs' },
      { label: 'Isolated Subnets', value: '4 VLANs' },
      { label: 'Connected Endpoints', value: '350+' },
    ],
    technologies: ['Cisco Catalyst 3850', '802.1Q VLANs', 'pfSense Firewall', 'Wireshark', 'DHCP Helper', 'Visio Topologies'],
    architecture: [
      'Core Layer 3 Switch handles inter-VLAN routing with access control lists',
      'VLAN 10: Management (Out-of-Band) · VLAN 20: Corporate Staff',
      'VLAN 30: Servers & Storage · VLAN 40: Isolated Guest Wi-Fi',
      'Redundant DHCP relays forwarded to dual Windows Server DHCP scopes',
    ],
  },
  {
    id: 'proj-2',
    title: 'Automated Active Directory Onboarding & Offboarding Suite',
    category: 'Automation',
    summary:
      'Engineered an event-driven PowerShell automation suite that processes HR-approved CSV employee rosters to provision user accounts, home drives, and security groups.',
    contribution:
      'Wrote modular PowerShell scripts that validate employee ID uniqueness, auto-generate standardized UPNs and email aliases, assign department-specific security groups, apply GPOs, and email credentials securely to hiring managers.',
    outcome:
      'Reduced average manual new-hire provisioning time from 3 hours to under 4 minutes per employee while eliminating human data entry errors in email aliases and security group permissions.',
    metrics: [
      { label: 'Provisioning Time', value: '4 mins' },
      { label: 'Time Reduction', value: '97%' },
      { label: 'Configuration Accuracy', value: '100%' },
      { label: 'Staff Accounts Handled', value: '250+' },
    ],
    technologies: ['PowerShell 7', 'Active Directory DS', 'Exchange Online / M365', 'NTFS ACL Management', 'Task Scheduler'],
    architecture: [
      'Input Validation: Sanitizes employee details and generates unique UPN format',
      'AD Object Creation: Sets attributes, telephone, title, department, and OU placement',
      'Security Group Ingestion: Auto-memberships for department drives & VPN permissions',
      'Automated Archival: One-click offboarding disabled account, revokes tokens, moves to Stale OU',
    ],
  },
  {
    id: 'proj-3',
    title: 'High-Availability Proxmox Homelab & Self-Hosted Services Cluster',
    category: 'Systems',
    summary:
      'Constructed a resilient 3-node enterprise testbed virtualization cluster at home to experiment with production-grade operating systems, storage replication, and zero-trust remote access.',
    contribution:
      'Assembled mini-PC hardware with upgraded RAM and NVMe storage. Installed Proxmox VE hypervisor, configured ZFS mirrored pools with daily snapshots, configured Pi-hole DNS redundancy, and established an encrypted WireGuard VPN mesh tunnel.',
    outcome:
      'Provides a safe, non-production sandbox to validate script rollouts, simulate catastrophic hardware failures, and test disaster recovery procedures before applying them to production systems.',
    metrics: [
      { label: 'Cluster Uptime', value: '99.9%' },
      { label: 'Active Containers/VMs', value: '18' },
      { label: 'Recovery RPO', value: '< 1 hr' },
      { label: 'Storage Protected', value: '4 TB ZFS' },
    ],
    technologies: ['Proxmox VE 8', 'ZFS Mirroring', 'TrueNAS Core', 'WireGuard', 'Pi-hole', 'Docker Compose', 'Grafana / Prometheus'],
    architecture: [
      '3x x86-64 Nodes in Proxmox Corosync Quorum',
      'Dual Pi-hole redundant DNS servers with DNS-over-HTTPS (DoH)',
      'Automated offsite backup syncing encrypted archives to Cloud storage',
      'Grafana dashboard monitoring node temperatures, RAM usage, and network throughput',
    ],
  },
  {
    id: 'proj-4',
    title: 'IT Helpdesk Incident Knowledge Base & Self-Service Portal',
    category: 'Support',
    summary:
      'Synthesized two years of incident tickets into an intuitive, searchable internal knowledge base and self-service troubleshooting portal for end users.',
    contribution:
      'Extracted top 30 recurring issue categories from ticketing databases, wrote screenshot-rich walkthroughs for common issues (MFA resets, network printer discovery, VPN setup, Outlook sync), and introduced standard operating runbooks for student support technicians.',
    outcome:
      'Deflected 28% of repetitive Tier-1 support tickets and reduced average resolution time for new helpdesk technicians by 35%.',
    metrics: [
      { label: 'Ticket Deflection', value: '28%' },
      { label: 'Resolution Speed', value: '+35%' },
      { label: 'Articles Published', value: '32 SOPs' },
      { label: 'User Rating', value: '4.9 / 5' },
    ],
    technologies: ['Jira Service Management', 'Confluence', 'Snagit / Markdown', 'ITIL Best Practices', 'End-User Training'],
    architecture: [
      'Tier 0: Interactive self-service diagnostic checklists for users',
      'Tier 1: Standard Operating Procedures (SOPs) for front-line technicians',
      'Escalation matrix with step-by-step diagnostic capture templates',
      'Feedback loop tracking article helpfulness ratings to drive continuous documentation updates',
    ],
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Science in Information Technology',
  major: 'Network & Systems Administration Focus',
  institution: 'State University / Institute of Technology',
  years: 'Graduation: 2024',
  gpa: '3.78 / 4.0',
  honors: "Dean's Honor List (4 Consecutive Semesters)",
  coursework: [
    'Computer Networks & TCP/IP Architecture',
    'Enterprise Operating Systems (Linux & Windows)',
    'Network Security & Threat Mitigation',
    'Database Systems & Structured Query Language (SQL)',
    'Cloud Computing Foundations (AWS / Azure)',
    'IT Project Management & ITIL Frameworks',
    'Data Structures & Algorithmic Problem Solving',
    'Hardware Architecture & Digital Systems',
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issueDate: 'Issued 2024 · Valid through 2027',
    credentialId: 'COMP0010293847',
    status: 'Active',
  },
  {
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    issueDate: 'Issued 2023 · Valid through 2026',
    credentialId: 'COMP0010291182',
    status: 'Active',
  },
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    issueDate: 'Issued 2024 · Valid through 2027',
    credentialId: 'AWS-CCP-9831048',
    status: 'Active',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA 200-301)',
    issuer: 'Cisco Systems',
    issueDate: 'Currently Enrolled / Scheduled Q4',
    status: 'In Progress',
  },
];
