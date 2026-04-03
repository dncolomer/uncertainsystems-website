import { StaticPage, Section, InfoCard } from "@/components/StaticPage";

export default function LegalPage() {
  return (
    <StaticPage title="Legal Notice" date="January 2026">
      <Section title="Company Information">
        <InfoCard>
          <p><strong className="text-gold">Company Name:</strong> Uncertain Systems</p>
          <p><strong className="text-gold">Owner:</strong> Daniel Colomer</p>
          <p><strong className="text-gold">Location:</strong> Barcelona, Spain</p>
          <p><strong className="text-gold">Email:</strong> hello@uncertainsystems.dev</p>
          <p><strong className="text-gold">Website:</strong> uncertainsystems.dev</p>
        </InfoCard>
      </Section>

      <Section title="Business Activity">
        <p>Uncertain Systems is dedicated to developing open source educational technology tools under the philosophy of educational accelerationism (edu/acc). Our mission is to accelerate human learning through open, AI-native technology solutions.</p>
        <p>Our activities include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Development and maintenance of open source software projects</li>
          <li>Educational technology consulting and services</li>
          <li>Community building and collaboration platforms</li>
          <li>Related products and services</li>
        </ul>
      </Section>

      <Section title="Intellectual Property Rights">
        <p>All content on this website, including but not limited to the Uncertain Systems brand name and logo, website design and layout, text, graphics, images, and proprietary software and documentation are the property of Uncertain Systems or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
        <p>Open source projects released by Uncertain Systems are governed by their respective open source licenses and may be used according to those license terms.</p>
      </Section>

      <Section title="Open Source Commitment">
        <p>Uncertain Systems is committed to the open source philosophy. Our core projects are released under permissive open source licenses (such as MIT or Apache 2.0), allowing the community to freely use, modify, and distribute the code.</p>
      </Section>

      <Section title="Liability Disclaimer">
        <p>The information on this website is provided &quot;as is&quot; without any warranties, express or implied. Uncertain Systems does not warrant the accuracy or completeness of the content, does not guarantee uninterrupted or error-free service, is not liable for any damages arising from the use of our website or software, and provides open source software without warranty of any kind.</p>
      </Section>

      <Section title="Governing Law">
        <p>This legal notice and any disputes arising from the use of this website shall be governed by and construed in accordance with the laws of Spain. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts of Barcelona, Spain.</p>
      </Section>

      <Section title="Contact">
        <InfoCard>
          <p><strong className="text-gold">Email:</strong> hello@uncertainsystems.dev</p>
          <p><strong className="text-gold">Location:</strong> Barcelona, Spain</p>
        </InfoCard>
      </Section>
    </StaticPage>
  );
}
