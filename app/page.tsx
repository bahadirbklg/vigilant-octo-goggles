import type { Metadata } from "next"
import Image from "next/image"

const baseUrl = "https://bahadirbakkaloglu.tech"

export const metadata: Metadata = {
  title: "Bahadir Bakkaloglu | Site Reliability Engineer | AWS Certified | RHCSA",
  description:
    "Site Reliability Engineer with 2+ years experience at Turk Telekom. AWS Certified SysOps Administrator and Red Hat Certified System Administrator (RHCSA). Expert in Kubernetes, Docker, Terraform, CI/CD, and cloud infrastructure automation.",
  keywords:
    "Bahadir Bakkaloglu, Site Reliability Engineer, SRE, DevOps Engineer, AWS Certified, RHCSA, Kubernetes Expert, Docker, Cloud Infrastructure, Istanbul, Turkey, Turk Telekom",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Bahadir Bakkaloglu | Site Reliability Engineer | AWS Certified SysOps Administrator",
    description:
      "Professional Site Reliability Engineer with AWS and Red Hat certifications. Specializing in Kubernetes, cloud automation, and high-availability systems.",
    url: baseUrl,
    type: "profile",
    locale: "en_US",
    siteName: "Bahadir Bakkaloglu Portfolio",
  },
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header - ATS Optimized */}
      <header className="mb-8 border-b pb-6">
        <h1 className="text-4xl font-bold mb-2">Bahadir Bakkaloglu</h1>
        <div className="text-xl font-semibold text-gray-800 mb-2">
          Site Reliability Engineer | DevOps Engineer | Cloud Infrastructure Specialist
        </div>
        <div className="text-gray-700 mb-3">
          <span className="font-medium">Current Role:</span> Site Reliability Engineer at Turk Telekom
        </div>

        {/* Contact Info - ATS Parseable */}
        <div className="flex flex-wrap gap-4 text-sm mb-4">
          <div>
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:bahadirbklg@gmail.com" className="text-blue-600" aria-label="Email Bahadir Bakkaloglu">
              bahadirbklg@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium">Phone:</span> <span>+90 535 948 3985</span>
          </div>
          <div>
            <span className="font-medium">Location:</span> Istanbul, Türkiye
          </div>
          <div>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/bahadir-bakkaloglu-846260174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
              aria-label="Bahadir Bakkaloglu LinkedIn Profile"
            >
              linkedin.com/in/bahadir-bakkaloglu-846260174
            </a>
          </div>
        </div>

        {/* Core Competencies - ATS Keywords */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="font-semibold text-gray-800 mb-2">Core Competencies & Technical Expertise:</div>
          <div className="text-sm text-gray-700">
            Cloud Platforms (AWS, Google Cloud) • Container Orchestration (Kubernetes, Docker) • Infrastructure as Code
            (Terraform, Ansible) • CI/CD (Jenkins, GitLab CI, GitHub Actions) • Linux System Administration (Red Hat,
            Ubuntu) • Monitoring & Observability (Prometheus, Grafana, ELK Stack) • Automation & Scripting (Python,
            Bash, Shell) • High Availability & Disaster Recovery • Incident Response & Troubleshooting • DevOps Best
            Practices • Site Reliability Engineering
          </div>
        </div>
      </header>

      {/* Navigation with structured data */}
      <nav className="mb-8 border-b pb-4" aria-label="Main navigation">
        <ul className="flex flex-wrap gap-6 text-sm">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#summary" className="hover:text-blue-600 transition-colors font-medium">
              Summary
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-600 transition-colors font-medium">
              Certifications
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600 transition-colors font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition-colors font-medium">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-600 transition-colors font-medium">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Professional Summary - ATS Optimized */}
      <section id="summary" className="mb-8" aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Professional Summary
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-3">
          <p>
            Results-driven <strong>Site Reliability Engineer</strong> with 2+ years of professional experience in
            designing, implementing, and maintaining highly available cloud infrastructure systems. Proven expertise in{" "}
            <strong>AWS cloud services</strong>, <strong>Kubernetes container orchestration</strong>,{" "}
            <strong>Linux system administration</strong>, and <strong>DevOps automation</strong>.
          </p>
          <p>
            <strong>AWS Certified SysOps Administrator</strong> and{" "}
            <strong>Red Hat Certified System Administrator (RHCSA)</strong> with hands-on experience in building and
            maintaining production environments serving thousands of users. Specialized in implementing comprehensive{" "}
            <strong>monitoring solutions</strong>, <strong>CI/CD pipelines</strong>, and{" "}
            <strong>infrastructure automation</strong> that reduce deployment times and improve system reliability.
          </p>
          <p>
            Strong background in <strong>incident response</strong>, <strong>performance optimization</strong>, and
            cross-functional collaboration with development teams to ensure 99.9% uptime SLA compliance.
          </p>
        </div>
      </section>

      {/* Professional Certifications - Top Section for ATS */}
      <section id="certifications" className="mb-8" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Professional Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <div className="flex items-start gap-3 mb-2">
              <Image
                src="/aws-sysops-badge.png"
                alt="AWS Certified SysOps Administrator Associate Certification Badge"
                width={60}
                height={60}
                className="rounded-lg"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-900">AWS Certified SysOps Administrator – Associate</h3>
                <div className="text-sm text-gray-600">Amazon Web Services (AWS)</div>
                <div className="text-sm text-gray-600">Valid: January 2025 - January 2028</div>
                <div className="text-xs text-gray-500">Credential ID: f7e9d44359514f9e8746d426b620da82</div>
              </div>
            </div>
          </article>

          <article className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
            <div className="flex items-start gap-3 mb-2">
              <Image
                src="/rhcsa-badge.png"
                alt="Red Hat Certified System Administrator RHCSA Certification Badge"
                width={60}
                height={60}
                className="rounded-lg"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-900">Red Hat Certified System Administrator (RHCSA)</h3>
                <div className="text-sm text-gray-600">Red Hat</div>
                <div className="text-sm text-gray-600">Issued: May 2025</div>
                <div className="text-xs text-gray-500">Certification ID: 240-051-938</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Professional Experience - ATS Structured */}
      <section id="experience" className="mb-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Professional Experience
        </h2>

        {/* Current Position */}
        <article className="mb-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-900">Site Reliability Engineer (SRE)</h3>
            <div className="text-lg font-semibold text-gray-800">Turk Telekom</div>
            <div className="text-gray-600">
              <span className="font-medium">Duration:</span> January 2023 - Present (2+ years)
            </div>
            <div className="text-gray-600">
              <span className="font-medium">Location:</span> Istanbul, Turkey
            </div>
          </div>

          <div className="ml-4">
            <div className="font-semibold text-gray-800 mb-2">Key Responsibilities & Achievements:</div>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>
                Design, implement, and maintain critical <strong>cloud infrastructure systems</strong> on{" "}
                <strong>AWS</strong> and <strong>Google Cloud Platform</strong> achieving 99.9% uptime SLA for
                production services serving 10,000+ concurrent users
              </li>
              <li>
                Architect and deploy comprehensive <strong>monitoring and observability solutions</strong> using{" "}
                <strong>Prometheus</strong>, <strong>Grafana</strong>, and <strong>ELK Stack</strong>, reducing mean
                time to detection (MTTD) by 70%
              </li>
              <li>
                Develop and maintain <strong>CI/CD pipelines</strong> using <strong>Jenkins</strong>,{" "}
                <strong>GitLab CI</strong>, and <strong>GitHub Actions</strong>, reducing deployment time by 60% and
                enabling 50+ deployments per week
              </li>
              <li>
                Implement <strong>Infrastructure as Code (IaC)</strong> using <strong>Terraform</strong> and{" "}
                <strong>Ansible</strong>, automating infrastructure provisioning and reducing manual configuration
                errors by 85%
              </li>
              <li>
                Manage <strong>Kubernetes clusters</strong> and containerized applications using <strong>Docker</strong>
                , orchestrating 100+ microservices across multiple environments
              </li>
              <li>
                Lead <strong>incident response</strong> and <strong>troubleshooting</strong> efforts, implementing
                post-mortem analysis and preventive measures that reduced recurring incidents by 45%
              </li>
              <li>
                Collaborate with cross-functional development teams to optimize <strong>application performance</strong>
                , implementing caching strategies and database optimizations that improved response times by 40%
              </li>
              <li>
                Develop <strong>automation scripts</strong> in <strong>Python</strong> and <strong>Bash</strong> for
                routine operational tasks, saving 20+ hours per week in manual work
              </li>
              <li>
                Implement <strong>security best practices</strong> including access controls, network policies, and
                security scanning in CI/CD pipelines
              </li>
              <li>
                Document system architectures, runbooks, and standard operating procedures for knowledge sharing and
                compliance
              </li>
            </ul>

            <div className="mt-3">
              <span className="font-semibold text-gray-800">Technologies Used:</span>
              <div className="text-gray-700 text-sm mt-1">
                AWS (EC2, S3, RDS, Lambda, CloudWatch, IAM), Kubernetes, Docker, Terraform, Ansible, Jenkins, GitLab CI,
                Prometheus, Grafana, ELK Stack, Python, Bash, Linux (Red Hat, Ubuntu), Git, Nginx, PostgreSQL, MySQL,
                Redis
              </div>
            </div>
          </div>
        </article>

        {/* Previous Position */}
        <article className="mb-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-900">Software Engineer in Test (Intern)</h3>
            <div className="text-lg font-semibold text-gray-800">Gözen Digital Aviation</div>
            <div className="text-gray-600">
              <span className="font-medium">Duration:</span> April 2022 - July 2022 (4 months)
            </div>
            <div className="text-gray-600">
              <span className="font-medium">Location:</span> Istanbul, Turkey
            </div>
          </div>

          <div className="ml-4">
            <div className="font-semibold text-gray-800 mb-2">Key Responsibilities & Achievements:</div>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>
                Developed comprehensive <strong>automated testing framework</strong> using{" "}
                <strong>Selenium WebDriver</strong> and <strong>Python</strong>, creating 150+ automated test cases
              </li>
              <li>
                Collaborated with business analysts and developers in an <strong>Agile/Scrum</strong> environment,
                participating in daily standups, sprint planning, and retrospectives
              </li>
              <li>
                Created and maintained detailed <strong>test documentation</strong>, including test plans, test cases,
                and bug reports using JIRA
              </li>
              <li>
                Implemented <strong>continuous testing</strong> practices, integrating automated tests into CI/CD
                pipeline
              </li>
              <li>
                Performed <strong>API testing</strong> using Postman and automated API tests using Python requests
                library
              </li>
            </ul>

            <div className="mt-3">
              <span className="font-semibold text-gray-800">Technologies Used:</span>
              <div className="text-gray-700 text-sm mt-1">
                Python, Selenium WebDriver, JIRA, Git, Postman, Jenkins, API Testing, Agile/Scrum Methodology
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Technical Skills - ATS Optimized with Categories */}
      <section id="skills" className="mb-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Technical Skills
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Cloud Platforms & Services:</h3>
            <div className="text-gray-700">
              Amazon Web Services (AWS): EC2, S3, RDS, Lambda, CloudWatch, IAM, VPC, ELB, Route 53, CloudFormation •
              Google Cloud Platform (GCP): Compute Engine, Cloud Storage, Cloud SQL, Kubernetes Engine • Cloud
              Architecture Design • Multi-Cloud Environments
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Container & Orchestration Technologies:</h3>
            <div className="text-gray-700">
              Kubernetes (K8s) • Docker • Container Security • Helm Charts • Pod Management • Service Mesh • Container
              Registry • Microservices Architecture
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Infrastructure as Code & Configuration Management:</h3>
            <div className="text-gray-700">
              Terraform • Ansible • CloudFormation • Infrastructure Automation • Configuration Management • GitOps •
              Infrastructure Provisioning
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">CI/CD & DevOps Tools:</h3>
            <div className="text-gray-700">
              Jenkins • GitLab CI/CD • GitHub Actions • Git • Version Control • Continuous Integration • Continuous
              Deployment • Build Automation • Release Management
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Monitoring, Logging & Observability:</h3>
            <div className="text-gray-700">
              Prometheus • Grafana • ELK Stack (Elasticsearch, Logstash, Kibana) • CloudWatch • Datadog • Application
              Performance Monitoring (APM) • Log Analysis • Alerting & Incident Management • Metrics Collection
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Operating Systems & Linux Administration:</h3>
            <div className="text-gray-700">
              Red Hat Enterprise Linux (RHEL) • Ubuntu • CentOS • Linux System Administration • Package Management (yum,
              apt) • Systemd • Networking • Firewall Configuration • Performance Tuning • Security Hardening
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Programming & Scripting Languages:</h3>
            <div className="text-gray-700">
              Python • Bash • Shell Scripting • Go (Golang) • YAML • JSON • Regular Expressions • Automation Scripting
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Databases & Data Stores:</h3>
            <div className="text-gray-700">
              PostgreSQL • MySQL • Redis • MongoDB • Database Administration • Backup & Recovery • Performance
              Optimization • Query Optimization
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Web Servers & Networking:</h3>
            <div className="text-gray-700">
              Nginx • Apache • Load Balancing • Reverse Proxy • SSL/TLS • DNS • TCP/IP • HTTP/HTTPS • Network
              Troubleshooting • VPN
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Methodologies & Best Practices:</h3>
            <div className="text-gray-700">
              Site Reliability Engineering (SRE) • DevOps Culture • Agile/Scrum • Incident Management • Post-Mortem
              Analysis • Disaster Recovery • High Availability Design • Capacity Planning • Performance Optimization •
              Security Best Practices • Documentation
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-8" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Education
        </h2>
        <article>
          <h3 className="text-xl font-bold text-gray-900">Bachelor of Engineering in Computer Engineering</h3>
          <div className="text-lg font-semibold text-gray-800">İstinye Üniversitesi (Istinye University)</div>
          <div className="text-gray-600">
            <span className="font-medium">Graduation:</span> 2023
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Duration:</span> 2018 - 2023
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Location:</span> Istanbul, Turkey
          </div>
          <div className="text-gray-600">
            <span className="font-medium">Honors:</span> Graduated with Honors
          </div>
          <div className="mt-2 text-gray-700">
            <span className="font-semibold">Relevant Coursework:</span> Operating Systems, Computer Networks, Database
            Management Systems, Software Engineering, Cloud Computing, Data Structures & Algorithms, System
            Architecture, Network Security
          </div>
        </article>
      </section>

      {/* Complete Certifications List */}
      <section id="all-certifications" className="mb-8" aria-labelledby="all-certifications-heading">
        <h2 id="all-certifications-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Complete Certification & Training Portfolio
        </h2>

        {/* AWS */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase">Amazon Web Services (AWS)</h3>
          <div className="ml-4">
            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">AWS Certified SysOps Administrator – Associate</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Amazon Web Services (AWS)</div>
              <div className="text-sm text-gray-700">Issue Date: January 2025</div>
              <div className="text-sm text-gray-700">Expiration Date: January 2028</div>
              <div className="text-sm text-gray-700">Credential ID: f7e9d44359514f9e8746d426b620da82</div>
              <a
                href="https://www.credly.com/badges/3b45d86b-5b92-427d-b348-60998a025263/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify AWS SysOps Administrator certification"
              >
                Verify Credential
              </a>
            </article>
          </div>
        </div>

        {/* Cisco */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase">Cisco Networking Academy</h3>
          <div className="ml-4 space-y-3">
            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">CCNA: Switching, Routing, and Wireless Essentials</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Cisco</div>
              <div className="text-sm text-gray-700">Issue Date: January 2025</div>
              <a
                href="https://www.credly.com/badges/287e316c-362e-4ce8-aad9-a7281c39605c/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify CCNA Switching Routing certification"
              >
                Verify Credential
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">CCNA: Introduction to Networks</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Cisco</div>
              <div className="text-sm text-gray-700">Issue Date: November 2024</div>
              <a
                href="https://www.credly.com/badges/fee192e6-c1bd-4436-ac13-23a523bee32d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify CCNA Introduction to Networks certification"
              >
                Verify Credential
              </a>
            </article>
          </div>
        </div>

        {/* Red Hat */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase">Red Hat</h3>
          <div className="ml-4 space-y-3">
            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Red Hat Certified System Administrator (RHCSA)</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Red Hat</div>
              <div className="text-sm text-gray-700">Issue Date: May 2025</div>
              <div className="text-sm text-gray-700">Certification ID: 240-051-938</div>
              <a
                href="https://rhtapps.redhat.com/verify?certId=240-051-938"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify RHCSA certification"
              >
                Verify Certificate
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">
                Red Hat Enterprise Linux Automation with Ansible (RH294) - Version 9.0
              </h4>
              <div className="text-sm text-gray-700">Issuing Organization: Red Hat</div>
              <div className="text-sm text-gray-700">Issue Date: April 2024</div>
              <a
                href="https://www.credly.com/badges/e5a851d5-93dd-49c4-b88d-ffb7b98620e1/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify Red Hat Ansible training"
              >
                Verify Credential
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">
                Red Hat OpenShift Developer I: Introduction to Containers with Podman (DO188) - Version 4.14
              </h4>
              <div className="text-sm text-gray-700">Issuing Organization: Red Hat</div>
              <div className="text-sm text-gray-700">Issue Date: April 2024</div>
              <a
                href="https://www.credly.com/badges/f8aeeb81-3afc-45ed-a8b7-186f37c16a68/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify Red Hat OpenShift training"
              >
                Verify Credential
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Red Hat System Administration II (RH134) - Version 9.0</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Red Hat</div>
              <div className="text-sm text-gray-700">Issue Date: April 2024</div>
              <a
                href="https://www.credly.com/badges/6c1a418c-8b77-446c-a143-f445620f1c2d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify Red Hat System Administration II training"
              >
                Verify Credential
              </a>
            </article>
          </div>
        </div>

        {/* Google */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase">Google Cloud</h3>
          <div className="ml-4">
            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Google Cloud Fundamentals: Core Infrastructure</h4>
              <div className="text-sm text-gray-700">Issuing Organization: Google Cloud Skills Boost</div>
              <div className="text-sm text-gray-700">Issue Date: June 2023</div>
              <div className="text-sm text-gray-700">Credential ID: 3958666</div>
              <a
                href="https://www.cloudskillsboost.google/public_profiles/a91fe9c5-78ee-4bad-82c2-ba3507c1224c/badges/3958666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify Google Cloud certification"
              >
                Verify Credential
              </a>
            </article>
          </div>
        </div>

        {/* IBM */}
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase">IBM</h3>
          <div className="ml-4 space-y-3">
            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Cloud Essentials</h4>
              <div className="text-sm text-gray-700">Issuing Organization: IBM</div>
              <div className="text-sm text-gray-700">Issue Date: March 2023</div>
              <a
                href="https://www.credly.com/badges/d835c0c0-9467-44ed-b5bc-78d5283edaf6/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify IBM Cloud Essentials badge"
              >
                Verify Credential
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Containers & Kubernetes Essentials</h4>
              <div className="text-sm text-gray-700">Issuing Organization: IBM</div>
              <div className="text-sm text-gray-700">Issue Date: March 2023</div>
              <a
                href="https://www.credly.com/badges/e1cc3cab-15d8-4513-87f2-347a8d1ba77d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify IBM Kubernetes certification"
              >
                Verify Credential
              </a>
            </article>

            <article className="mb-3 pb-3 border-b">
              <h4 className="font-semibold text-gray-900">Python for Data Science</h4>
              <div className="text-sm text-gray-700">Issuing Organization: IBM</div>
              <div className="text-sm text-gray-700">Issue Date: March 2023</div>
              <a
                href="https://www.credly.com/badges/38ac003f-2be6-4bad-8086-bc6371e363f4/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
                aria-label="Verify IBM Python certification"
              >
                Verify Credential
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="mb-8" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Languages
        </h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold text-gray-800">Turkish:</span>{" "}
            <span className="text-gray-700">Native Proficiency</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">English:</span>{" "}
            <span className="text-gray-700">Native or Bilingual Proficiency</span>
          </div>
        </div>
      </section>

      {/* Contact Information - Repeated for ATS */}
      <section id="contact" className="mb-8" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-bold mb-3 border-b-2 border-gray-200 pb-2">
          Contact Information
        </h2>
        <address className="space-y-2 text-gray-700 not-italic">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:bahadirbklg@gmail.com" className="text-blue-600">
              bahadirbklg@gmail.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Phone:</span> <a href="tel:+905359483985">+90 535 948 3985</a>
          </div>
          <div>
            <span className="font-semibold">Location:</span> Istanbul, Türkiye
          </div>
          <div>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/bahadir-bakkaloglu-846260174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              linkedin.com/in/bahadir-bakkaloglu-846260174
            </a>
          </div>
          <div>
            <span className="font-semibold">Portfolio Website:</span>{" "}
            <a href="https://bahadirbakkaloglu.tech" className="text-blue-600">
              https://bahadirbakkaloglu.tech
            </a>
          </div>
        </address>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-8 border-t">
        <p>&copy; {new Date().getFullYear()} Bahadir Bakkaloglu. All rights reserved.</p>
        <p className="mt-1">Site Reliability Engineer | DevOps Engineer | Cloud Infrastructure Specialist</p>
        <p className="mt-2 text-xs">
          AWS Certified SysOps Administrator | Red Hat Certified System Administrator (RHCSA)
        </p>
      </footer>
    </div>
  )
}
