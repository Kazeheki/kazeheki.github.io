export type Project = {
    description: string;
    industry: "automotive";
}

export type SkillCertificationMeta = {
    firstCertifiedAtYear: number;
    expired: boolean;
}

export const skillCategories = [
    "language",
    "framework",
    "tool",
    "cloud",
    "fun",
    "database",
    "methodology",
    "protocol",
    "ci-cd",
    "secret-management",
    "design",
    "messaging",
    "observability",
    "testing"
] as const;

export type SkillCategory = typeof skillCategories[number];

export type Skill = {
    name: string;
    category: SkillCategory;
    projects: Project[];
    certification?: SkillCertificationMeta
}

export const skills: Skill[] = [
    // languages
    { name: "Bash", category: "language", projects: [] },
    { name: "C#", category: "language", projects: [] },
    { name: "C++", category: "language", projects: [] },
    { name: "Golang", category: "language", projects: [] },
    { name: "HTML + CSS", category: "language", projects: [] },
    { name: "Java", category: "language", projects: [] },
    { name: "JavaScript", category: "language", projects: [] },
    { name: "Markdown", category: "language", projects: [] },
    { name: "Python", category: "language", projects: [] },
    { name: "SQL", category: "language", projects: [] },
    { name: "TypeScript", category: "language", projects: [] },

    // frameworks / libraries
    { name: "Angular JS", category: "framework", projects: [] },
    { name: "Angular", category: "framework", projects: [] },
    { name: "NodeJS", category: "framework", projects: [] },
    { name: "Quarkus", category: "framework", projects: [] },
    { name: "RxJS", category: "framework", projects: [] },
    { name: "UI5", category: "framework", projects: [] },

    // cloud
    { name: "AWS", category: "cloud", projects: [], certification: { firstCertifiedAtYear: 2020, expired: true } },
    { name: "Azure", category: "cloud", projects: [] },

    // databases
    { name: "OracleDB", category: "database", projects: [] },
    { name: "PostgreSQL", category: "database", projects: [] },

    // devops / cicd
    { name: "ArgoCD", category: "ci-cd", projects: [] },
    { name: "Docker", category: "ci-cd", projects: [] },
    { name: "GitHub Actions", category: "ci-cd", projects: [], certification: { firstCertifiedAtYear: 2024, expired: false } },
    { name: "Helm", category: "ci-cd", projects: [] },
    { name: "Jenkins", category: "ci-cd", projects: [] },
    { name: "Kubernetes", category: "ci-cd", projects: [] },
    { name: "Terraform", category: "ci-cd", projects: [] },
    { name: "Docker Compose", category: "ci-cd", projects: [] },

    // secret management
    { name: "External Secrets", category: "secret-management", projects: [] },
    { name: "Sealed Secrets", category: "secret-management", projects: [] },
    { name: "Vault", category: "secret-management", projects: [] },

    // observability
    { name: "Grafana", category: "observability", projects: [] },
    { name: "Prometheus", category: "observability", projects: [] },
    { name: "Loki", category: "observability", projects: [] },

    // testing
    { name: "Playwright", category: "testing", projects: [] },

    // tools
    { name: "Git", category: "tool", projects: [] },
    { name: "GitHub Copilot", category: "tool", projects: [], certification: { firstCertifiedAtYear: 2026, expired: false } },
    { name: "vim", category: "tool", projects: [] },
    { name: "SonarQube", category: "tool", projects: [] },
    { name: "Linux", category: "tool", projects: [] },
    { name: "Windows", category: "tool", projects: [] },
    { name: "Jira", category: "tool", projects: [] },
    { name: "Confluence", category: "tool", projects: [] },
    { name: "LLM Prompting", category: "tool", projects: [] },

    // protocols
    { name: "OPC-UA", category: "protocol", projects: [] },
    { name: "REST", category: "protocol", projects: [] },
    { name: "Swagger / OpenAPI", category: "protocol", projects: [] },

    // messaging
    { name: "Kafka", category: "messaging", projects: [] },

    // methodologies
    { name: "Agile", category: "methodology", projects: [] },
    { name: "Kanban", category: "methodology", projects: [] },
    { name: "Scrum", category: "methodology", projects: [] },
    { name: "Microservices", category: "methodology", projects: [] },

    // design
    { name: "UX", category: "design", projects: [] },

    // fun
    { name: "Godot", category: "fun", projects: [] }

];