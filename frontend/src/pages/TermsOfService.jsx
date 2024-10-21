import React from 'react';

const TermsAndService = () => {
  return (
    <div className="terms-container max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Service</h1>

      <p className="text-gray-700 mb-4">
        Welcome to [Your Blog App Name] (the "Platform"). By accessing or using
        our Platform, you agree to be bound by these Terms and Service
        ("Terms"). Please read these Terms carefully before using the Platform.
        If you do not agree with any part of the Terms, you must discontinue use
        of the Platform immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By registering, accessing, or using the Platform in any way, you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms. These Terms govern your access to and use of our website,
        services, and content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Eligibility</h2>
      <p className="text-gray-700 mb-4">
        You must be at least 13 years old to use the Platform. By accessing the
        Platform, you represent that you have the legal capacity and authority
        to enter into these Terms and comply with all applicable laws and
        regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Accounts</h2>
      <h3 className="text-xl font-semibold mb-2">Registration</h3>
      <p className="text-gray-700 mb-4">
        You may need to create an account to access certain features of the
        Platform. When creating your account, you agree to provide accurate and
        complete information. You are responsible for safeguarding your password
        and agree not to disclose your account details to any third party.
      </p>

      <h3 className="text-xl font-semibold mb-2">Account Responsibility</h3>
      <p className="text-gray-700 mb-4">
        You are responsible for all activities that occur under your account. If
        you suspect unauthorized use of your account, please notify us
        immediately at [Contact Email].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Content on the Platform</h2>
      <h3 className="text-xl font-semibold mb-2">User-Generated Content</h3>
      <p className="text-gray-700 mb-4">
        The Platform allows you to publish blog posts, comments, and other
        content ("User Content"). You retain ownership of your User Content, but
        by posting it on the Platform, you grant us a non-exclusive,
        royalty-free, worldwide license to use, distribute, and display it in
        connection with the operation of the Platform.
      </p>

      <h3 className="text-xl font-semibold mb-2">Prohibited Content</h3>
      <p className="text-gray-700 mb-4">
        You agree not to post content that is unlawful, harmful, defamatory, or
        otherwise objectionable. We reserve the right to remove or edit content
        that violates these Terms or applicable laws.
      </p>

      <h3 className="text-xl font-semibold mb-2">Copyright</h3>
      <p className="text-gray-700 mb-4">
        Do not upload content that violates the copyright, trademark, or other
        intellectual property rights of others.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Prohibited Activities</h2>
      <p className="text-gray-700 mb-4">You agree not to engage in the following activities:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Impersonating another person or entity.</li>
        <li>Hacking, disrupting, or interfering with the Platform’s functionality or security.</li>
        <li>Using the Platform for any illegal or unauthorized purpose.</li>
        <li>Posting spam, misleading information, or malicious content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content and materials on the Platform, excluding User Content, are
        the intellectual property of [Your Blog App Name] or its licensors. This
        includes logos, design, code, and text. You may not reproduce,
        distribute, or create derivative works without our explicit permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Termination</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to suspend or terminate your access to the Platform
        at our discretion, without notice, for any violation of these Terms or
        other inappropriate use of the Platform. You may also terminate your
        account at any time by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Disclaimers</h2>
      <h3 className="text-xl font-semibold mb-2">No Warranties</h3>
      <p className="text-gray-700 mb-4">
        The Platform is provided "as is" and "as available." We make no
        warranties, express or implied, about the reliability, security, or
        accuracy of the Platform.
      </p>

      <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
      <p className="text-gray-700 mb-4">
        To the fullest extent permitted by law, <strong>Rahul Raj <span className='text-blue-600'>Blogs</span></strong> and its
        affiliates will not be liable for any indirect, incidental, or
        consequential damages resulting from your use of the Platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Modifications to the Terms</h2>
      <p className="text-gray-700 mb-4">
        We may update these Terms from time to time. Any changes will be
        effective immediately upon posting on the Platform. Your continued use
        of the Platform constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These Terms shall be governed by and construed in accordance with the
        laws of India, without regard to its conflict of law
        provisions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">11. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about these Terms, please contact
        us at {' '} <a href="mailto:rahulrajmodi24523@gmail.com" className='text-blue-600 hover:underline'>rahulrajmodi24523@gmail.com</a>
      </p>
    </div>
  );
};

export default TermsAndService;
