import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <main className="w-full">
      <Header />
      <div className="max-w-5xl mx-auto w-full p-8 my-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow mb-4">Privacy Policy</h1>
        <p className="mb-4">Effective Date: November 20, 2024</p>
        <p className="mb-4">
          Fractionate (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your trust and is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you access our platform or use our services. By using our website or services, you agree to the terms outlined in this policy.
        </p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">1. Information We Collect</h2>
        <p className="mb-4">We collect the following types of information:</p>
        <h3 className="text-xl font-semibold mb-2">a. Personal Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Name, email address, phone number, and other contact details.</li>
          <li>Payment information (e.g., credit/debit card details or transaction data) processed securely by our payment partners.</li>
          <li>Account login credentials </li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">b. Non-Personal Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Browser type, device information, and IP address.</li>
          <li>Usage data, such as time spent on pages, clicks, and interactions with our platform.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">c. Cookies and Tracking Technologies</h3>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your experience, personalize content, and analyze website performance.
        </p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information collected for the following purposes:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Service Delivery:</strong> To provide and maintain our services, including account management and customer support.</li>
          <li><strong>Payment Processing:</strong> To securely handle payments and transactions via trusted payment gateways.</li>
          <li><strong>Improvement:</strong> To analyze usage patterns and improve our platform&#39;s functionality and user experience.</li>
          <li><strong>Marketing:</strong> To send promotional content, updates, and service-related communications. You can opt out of marketing emails at any time.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-yellow mb-2">3. Information Sharing and Disclosure</h2>
        <p className="mb-4">We do not sell or rent your personal information. However, we may share your information under the following circumstances:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Service Providers:</strong> With third-party vendors (e.g., payment processors or analytics providers) who assist in delivering our services.</li>
          <li><strong>Legal Compliance:</strong> When required to comply with applicable laws, regulations, or legal proceedings.</li>
          <li><strong>Business Transactions:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-yellow mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information from unauthorized access, loss, misuse, or alteration. While we strive to safeguard your data, no system is entirely secure, and we cannot guarantee absolute protection.
        </p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">5. Your Rights</h2>
        <p className="mb-4">As a user of Fractionate, you have the following rights:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Access and Update:</strong> View and update your personal information by logging into your account.</li>
          <li><strong>Delete Data:</strong> Request deletion of your data by contacting us (subject to legal and contractual obligations).</li>
          <li><strong>Withdraw Consent:</strong> Revoke consent for specific uses of your data at any time.</li>
        </ul>
        <p className="mb-4">To exercise these rights, please email us at +91 77000-08725.</p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">6. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We recommend reviewing their privacy policies before engaging with them.
        </p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">7. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting on our platform. Continued use of our website or services after changes indicates your acceptance of the revised policy.
        </p>
        <h2 className="text-2xl font-semibold text-yellow mb-2">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">Email: info@fractionate.in</p>
        <p className="mb-4">Phone: +91 77000-08725</p>
        <p className="mb-4">Address:SCO-81 D Block Ranjit Avenue, Amritsar</p>
      </div>
      <Footer />
    </main>
  );
}