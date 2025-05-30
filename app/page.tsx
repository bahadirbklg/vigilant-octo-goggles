import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpeg"
            alt="Bahadir Bakkaloglu"
            width={80}
            height={80}
            className="rounded-full"
            priority
            unoptimized
          />
          <div>
            <h1 className="text-xl font-bold">Bahadir Bakkaloglu</h1>
            <p className="text-gray-600">Site Reliability Engineer @ Turk Telekom</p>
            <p className="text-sm text-gray-500 mt-1">Cloud Infrastructure | Linux | Automation</p>
          </div>
        </div>
      </header>

      <nav className="mb-8">
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#highlights" className="hover:underline">
              Highlights
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:underline">
              Certifications
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="about" className="mb-8">
        <h2 className="text-lg font-bold mb-2">About</h2>
        <p className="mb-3">
          Site Reliability Engineer with expertise in cloud infrastructure, Linux systems administration, and
          automation. Focused on building resilient systems, optimizing performance, and implementing DevOps practices
          to ensure high availability and reliability of critical services.
        </p>
        <p>
          Passionate about containerization technologies, infrastructure as code, and continuous integration/deployment
          pipelines. AWS certified with experience in monitoring, alerting, and incident response.
        </p>
      </section>

      <section id="highlights" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-4 mb-3">
              <Image
                src="/aws-sysops-badge.png"
                alt="AWS Certified SysOps Administrator Badge"
                width={60}
                height={60}
                className="rounded-lg"
                unoptimized
              />
              <div>
                <h3 className="font-semibold text-blue-800">AWS Certified SysOps Administrator</h3>
                <p className="text-sm text-blue-600">Associate Level</p>
              </div>
            </div>
            <p className="text-sm text-blue-700">
              Demonstrates expertise in deployment, management, and operations on AWS platform with focus on monitoring,
              troubleshooting, and automation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-3">
              <Image
                src="/rhcsa-badge.png"
                alt="Red Hat Certified System Administrator Badge"
                width={60}
                height={60}
                className="rounded-lg"
                unoptimized
              />
              <div>
                <h3 className="font-semibold text-gray-800">Red Hat Certified System Administrator</h3>
                <p className="text-sm text-gray-600">RHCSA</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Performance-based certification validating hands-on skills in Red Hat Enterprise Linux system
              administration and core system management tasks.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Experience</h2>

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">System Administrator & SRE</h3>
            <span className="text-sm text-gray-500">Jan 2023 - Present</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Turk Telekom</p>
          <ul className="text-sm list-disc pl-4">
            <li>Design and maintain critical infrastructure systems with 99.9% uptime SLA</li>
            <li>Implement comprehensive monitoring and alerting solutions using industry-standard tools</li>
            <li>Develop automation scripts and CI/CD pipelines to streamline deployment processes</li>
            <li>Collaborate with development teams to optimize application performance and reliability</li>
            <li>Lead incident response and troubleshooting for production environments</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">Software Engineer in Test Intern</h3>
            <span className="text-sm text-gray-500">Apr 2022 - Jul 2022</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">Gözen Digital Aviation</p>
          <ul className="text-sm list-disc pl-4">
            <li>Developed automated test framework using Selenium WebDriver and Python</li>
            <li>Collaborated with business analysts and developers in an Agile environment</li>
            <li>Created and maintained test documentation and reporting systems</li>
          </ul>
        </div>
      </section>

      <section id="education" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Education</h2>
        <div className="flex justify-between mb-1">
          <h3 className="font-medium">Bachelor of Engineering - Computer Engineering</h3>
          <span className="text-sm text-gray-500">2018 - 2023</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">İstinye Üniversitesi</p>
        <p className="text-sm">
          Coursework included: Operating Systems, Computer Networks, Database Management Systems, Software Engineering,
          and Cloud Computing. Graduated with honors.
        </p>
      </section>

      <section id="certifications" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Certifications</h2>

        {/* AWS */}
        <div className="mb-4">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">AWS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="font-medium">AWS Certified SysOps Administrator – Associate</div>
              <div className="text-gray-600">Amazon Web Services (AWS)</div>
              <div className="text-gray-500">Issued Jan 2025 · Expires Jan 2028</div>
              <div className="text-gray-500">Credential ID f7e9d44359514f9e8746d426b620da82</div>
              <a
                href="https://www.credly.com/badges/3b45d86b-5b92-427d-b348-60998a025263/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>
          </ul>
        </div>

        {/* Cisco */}
        <div className="mb-4">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Cisco</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="font-medium">CCNA: Switching, Routing, and Wireless Essentials</div>
              <div className="text-gray-600">Cisco</div>
              <div className="text-gray-500">Issued Jan 2025</div>
              <a
                href="https://www.credly.com/badges/287e316c-362e-4ce8-aad9-a7281c39605c/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>

            <li>
              <div className="font-medium">CCNA: Introduction to Networks</div>
              <div className="text-gray-600">Cisco</div>
              <div className="text-gray-500">Issued Nov 2024</div>
              <a
                href="https://www.credly.com/badges/fee192e6-c1bd-4436-ac13-23a523bee32d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>
          </ul>
        </div>

        {/* Red Hat */}
        <div className="mb-4">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Red Hat</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="font-medium">Red Hat Certified System Administrator (RHCSA)</div>
              <div className="text-gray-600">Red Hat</div>
              <div className="text-gray-500">Issued May 2025</div>
              <div className="text-gray-500">Certification ID 240-051-938</div>
              <a
                href="https://rhtapps.redhat.com/verify?certId=240-051-938"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Verify Certificate
              </a>
            </li>
            <li>
              <div className="font-medium">Red Hat Enterprise Linux Automation with Ansible (RH294) - Ver. 9.0</div>
              <div className="text-gray-600">Red Hat</div>
              <div className="text-gray-500">Issued Apr 2024</div>
              <a
                href="https://www.credly.com/badges/e5a851d5-93dd-49c4-b88d-ffb7b98620e1/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>

            <li>
              <div className="font-medium">
                Red Hat OpenShift Developer I: Introduction to Containers with Podman (DO188) - Ver. 4.14
              </div>
              <div className="text-gray-600">Red Hat</div>
              <div className="text-gray-500">Issued Apr 2024</div>
              <a
                href="https://www.credly.com/badges/f8aeeb81-3afc-45ed-a8b7-186f37c16a68/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>

            <li>
              <div className="font-medium">Red Hat System Administration II (RH134) - Ver. 9.0</div>
              <div className="text-gray-600">Red Hat</div>
              <div className="text-gray-500">Issued Apr 2024</div>
              <a
                href="https://www.credly.com/badges/6c1a418c-8b77-446c-a143-f445620f1c2d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>
          </ul>
        </div>

        {/* Google */}
        <div className="mb-4">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Google</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="font-medium">Google Cloud Fundamentals: Core Infrastructure</div>
              <div className="text-gray-600">Google Cloud Skills Boost</div>
              <div className="text-gray-500">Issued Jun 2023</div>
              <div className="text-gray-500">Credential ID 3958666</div>
              <a
                href="https://www.cloudskillsboost.google/public_profiles/a91fe9c5-78ee-4bad-82c2-ba3507c1224c/badges/3958666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>
          </ul>
        </div>

        {/* IBM */}
        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">IBM</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="font-medium">Cloud Essentials</div>
              <div className="text-gray-600">IBM</div>
              <div className="text-gray-500">Issued Mar 2023</div>
              <a
                href="https://www.credly.com/badges/d835c0c0-9467-44ed-b5bc-78d5283edaf6/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>

            <li>
              <div className="font-medium">Containers & Kubernetes Essentials</div>
              <div className="text-gray-600">IBM</div>
              <div className="text-gray-500">Issued Mar 2023</div>
              <a
                href="https://www.credly.com/badges/e1cc3cab-15d8-4513-87f2-347a8d1ba77d/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>

            <li>
              <div className="font-medium">Python for Data Science</div>
              <div className="text-gray-600">IBM</div>
              <div className="text-gray-500">Issued Mar 2023</div>
              <a
                href="https://www.credly.com/badges/38ac003f-2be6-4bad-8086-bc6371e363f4/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Show credential
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Skills</h2>

        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Cloud & Infrastructure</h3>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Public Cloud", "Private Cloud"].map(
              (skill) => (
                <span key={skill} className="bg-gray-100 px-2 py-0.5 text-sm rounded">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Systems & Operations</h3>
          <div className="flex flex-wrap gap-2">
            {["Linux", "Ansible", "Bash", "Shell Scripting", "Monitoring", "Troubleshooting", "High Availability"].map(
              (skill) => (
                <span key={skill} className="bg-gray-100 px-2 py-0.5 text-sm rounded">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Development & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "Git", "CI/CD", "Jenkins", "Prometheus", "Grafana", "ELK Stack"].map((skill) => (
              <span key={skill} className="bg-gray-100 px-2 py-0.5 text-sm rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-sm mb-2">Languages</h3>
          <ul className="text-sm list-disc pl-4">
            <li>Turkish (Native)</li>
            <li>English (Native or Bilingual)</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mb-8">
        <h2 className="text-lg font-bold mb-2">Contact</h2>
        <ul className="text-sm space-y-1">
          <li>
            Email: <span className="select-all">bahadirbklg@gmail.com</span>
          </li>
          <li>
            Phone: <span className="select-all">05359483985</span>
          </li>
          <li>Location: Istanbul, Türkiye</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bahadir-bakkaloglu-846260174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              bahadir-bakkaloglu-846260174
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-4 border-t">
        &copy; {new Date().getFullYear()} Bahadir Bakkaloglu
      </footer>
    </div>
  )
}
