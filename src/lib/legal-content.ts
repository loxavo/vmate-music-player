// Legal Center content for Loxavo.
//
// These documents are GENERAL and apply to ALL current and future applications
// published by Loxavo. They never reference any specific application by name.
// Where a product is described, it is referred to as "the Applications" or
// "All applications published by Loxavo."
//
// Compliance targets: Apple App Store, Google Play, GDPR, CCPA/CPRA, UK GDPR,
// and general privacy best practices.

export interface LegalSubsection {
  heading: string
  body: string
}

export interface LegalLink {
  label: string
  view: string // hash view key of another legal document
}

export interface LegalSection {
  id: string
  heading: string
  body?: string
  list?: string[]
  subsections?: LegalSubsection[]
  related?: LegalLink[] // cross-references rendered as chips
}

export interface LegalDoc {
  view: string // hash view key, e.g. "privacy"
  title: string
  navLabel: string // label used in footer / navigation
  lastUpdated: string
  effective: string
  intro: string
  seo: {
    title: string
    description: string
    canonical: string // absolute URL
  }
  sections: LegalSection[]
  related?: LegalLink[] // shown at the end of the document
}

const UPDATED = 'January 15, 2025'
const EFFECTIVE = 'January 15, 2025'

// ---------------------------------------------------------------
// 1. PRIVACY POLICY
// ---------------------------------------------------------------
export const PRIVACY_POLICY: LegalDoc = {
  view: 'privacy',
  title: 'Privacy Policy',
  navLabel: 'Privacy Policy',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'This Privacy Policy explains how Loxavo ("we", "us", or "our") collects, uses, and protects information when you visit our website or use any of our mobile applications. It applies to all applications published by Loxavo (the "Applications"), whether currently available or released in the future. Our Applications are designed to be offline-first and privacy-respecting by default: we do not require you to create an account, we do not sell your personal information, and — wherever technically possible — your data stays on your device.',
  seo: {
    title: 'Privacy Policy — Loxavo',
    description:
      'How Loxavo collects, uses and protects your information across all applications published by Loxavo. Offline-first, no account required, GDPR and CCPA compliant.',
    canonical: 'https://loxavo.site/#privacy',
  },
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We Collect',
      subsections: [
        {
          heading: 'Information you provide',
          body: 'If you contact our support team or submit the contact form on our website, we receive the name, email address, subject and message you choose to share. We use this information solely to respond to your request and to provide the support you have asked for.',
        },
        {
          heading: 'Information collected automatically',
          body: 'Our Applications are built to work offline. They do not collect personal data, usage history, or behavioural profiles, and we do not embed third-party analytics or advertising SDKs in the Applications. If we ever introduce optional, anonymized usage statistics, they will be strictly opt-in, aggregated, and described clearly in this Policy before they are activated.',
        },
        {
          heading: 'Device permissions',
          body: 'Depending on an Application\'s features, it may request access to device capabilities such as the media library, local file storage, microphone, camera, or speech recognition. These permissions are used only to provide the feature you have chosen to use, and the data accessed — such as audio, photos, or transcripts — never leaves your device unless you explicitly export or share it.',
        },
      ],
    },
    {
      id: 'how-we-use-information',
      heading: '2. How We Use Information',
      body: 'We use the limited information we receive for the following purposes:',
      list: [
        'Responding to support, feedback and contact requests',
        'Improving our Applications, their features and their localization',
        'Processing and validating optional in-app purchases (handled by Apple and Google)',
        'Detecting, preventing and addressing technical issues, fraud or abuse',
        'Complying with our legal and regulatory obligations',
      ],
    },
    {
      id: 'local-storage',
      heading: '3. Local Storage on Your Device',
      body: 'The Applications store preferences and content — such as settings, playback queues, notes, transcripts and playlists — locally on your device. This data is not transmitted to us. You can erase all locally stored data at any time by deleting the Application or by using the in-app reset option where available.',
    },
    {
      id: 'on-device-processing',
      heading: '4. On-Device Processing',
      body: 'Wherever an Application performs analysis on your content — for example transcription, summarization or other AI-assisted features — that processing is designed to happen entirely on your device. Your content is not uploaded to our servers or to any cloud service in order to provide these features. See our AI Disclosure for more detail.',
      related: [{ label: 'AI Disclosure', view: 'ai-disclosure' }],
    },
    {
      id: 'in-app-purchases',
      heading: '5. In-App Purchases & Billing',
      body: 'Some Applications offer optional one-time purchases or subscriptions to unlock premium features. All billing is processed by Apple (via the App Store) or Google (via Google Play). We receive only a transaction identifier and product identifier from the store to validate your purchase; we never receive or store your full payment card details. See our Purchase & Subscription Terms for details.',
      related: [{ label: 'Purchase & Subscription Terms', view: 'subscription' }],
    },
    {
      id: 'data-retention',
      heading: '6. Data Retention',
      body: 'Contact messages received through our website are retained for up to 24 months so we can provide continuity of support, and are then permanently deleted. Purchase validation records are retained for as long as necessary to honor your purchase and to meet accounting and tax requirements. Data stored on your device by the Applications is retained until you delete it.',
    },
    {
      id: 'third-parties',
      heading: '7. Third-Party Services',
      body: 'The Applications themselves do not send your personal data to third parties. Our website contact form transmits your message to our support infrastructure. Apple and Google handle all in-app purchase processing under their respective privacy policies. Where an Application integrates with an optional third-party service you explicitly connect (such as a calendar or cloud storage provider), that connection is governed by the provider\'s own terms and privacy policy. We do not sell, rent or trade your information to anyone.',
    },
    {
      id: 'your-rights',
      heading: '8. Your Privacy Rights',
      body: 'Depending on where you live, you may have the following rights regarding your personal data:',
      list: [
        'Access — request a copy of the personal data we hold about you',
        'Rectification — ask us to correct inaccurate or incomplete data',
        'Erasure — request deletion of your personal data',
        'Objection — object to certain processing of your data',
        'Withdraw consent — at any time, where processing relies on your consent',
        'Portability — receive your data in a structured, machine-readable format, where applicable',
      ],
      subsections: [
        {
          heading: 'GDPR (European Economic Area, United Kingdom, Switzerland)',
          body: 'For residents of the EEA, the UK and Switzerland, we act as a data controller for contact-form data. To exercise your rights, email privacy@loxavo.site. We respond within one month, and may need to verify your identity before acting on a request where lawful.',
        },
        {
          heading: 'CCPA / CPRA (California)',
          body: 'California residents may request disclosure of the categories of personal information collected, request deletion, and opt out of any "sale" or "share" of personal information. Loxavo does not sell personal information. Submit requests to privacy@loxavo.site. We will not discriminate against you for exercising your rights.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      heading: "9. Children's Privacy",
      body: 'Our Applications are not directed to children under 13 (or the equivalent minimum age in your jurisdiction), and we do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.',
    },
    {
      id: 'international-transfers',
      heading: '10. International Data Transfers',
      body: 'If you contact us from outside the region where our support infrastructure is hosted, your message may be processed in another country. By contacting us, you consent to that transfer. We apply appropriate safeguards — such as standard contractual clauses where required — consistent with this Policy.',
    },
    {
      id: 'security',
      heading: '11. Security',
      body: 'We use reasonable technical and organizational measures to protect contact-form data in transit and at rest. However, no method of transmission over the internet is fully secure. Data created inside the Applications is protected by the operating system itself and, by design, is not transmitted by the Applications.',
    },
    {
      id: 'cookies',
      heading: '12. Cookies',
      body: 'Our website uses only minimal, essential cookies and similar technologies. Full details are available in our Cookie Policy.',
      related: [{ label: 'Cookie Policy', view: 'cookie-policy' }],
    },
    {
      id: 'changes',
      heading: '13. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised "Last updated" date and, where a change is material, we will highlight it within the Applications or on this page. Continued use of the Applications after a change constitutes acceptance of the updated Policy.',
    },
    {
      id: 'contact',
      heading: '14. Contact',
      body: 'If you have questions about this Privacy Policy or your personal data, contact us at privacy@loxavo.site or through the Contact page on this website.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Terms of Use', view: 'terms-of-use' },
    { label: 'Terms & Conditions', view: 'terms' },
    { label: 'Cookie Policy', view: 'cookie-policy' },
    { label: 'AI Disclosure', view: 'ai-disclosure' },
  ],
}

// ---------------------------------------------------------------
// 2. TERMS OF USE
// ---------------------------------------------------------------
export const TERMS_OF_USE: LegalDoc = {
  view: 'terms-of-use',
  title: 'Terms of Use',
  navLabel: 'Terms of Use',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'These Terms of Use govern your access to and use of the Loxavo website and all applications published by Loxavo (the "Applications"). By accessing our website or downloading, installing or using any Application, you agree to be bound by these Terms. If you do not agree, please do not use our website or the Applications. These Terms apply generally to all applications published by Loxavo, whether currently available or released in the future.',
  seo: {
    title: 'Terms of Use — Loxavo',
    description:
      'Terms of Use for the Loxavo website and all applications published by Loxavo. Covers eligibility, license, acceptable use, intellectual property and disclaimers.',
    canonical: 'https://loxavo.site/#terms-of-use',
  },
  sections: [
    {
      id: 'acceptance',
      heading: '1. Acceptance of Terms',
      body: 'By using our website or the Applications, you acknowledge that you have read, understood and agree to these Terms and to our Privacy Policy. If you are using the Applications on behalf of an organization, you represent that you have the authority to bind that organization.',
      related: [{ label: 'Privacy Policy', view: 'privacy' }],
    },
    {
      id: 'eligibility',
      heading: '2. Eligibility',
      body: 'You must be at least 13 years old (or the minimum age of digital consent in your country) to use the Applications. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf. We do not knowingly collect personal information from children as described in our Privacy Policy.',
    },
    {
      id: 'license',
      heading: '3. License to Use',
      body: 'We grant you a limited, personal, non-exclusive, non-transferable, revocable license to download, install and use the Applications on devices that you own or control, solely for your personal, non-commercial use. The Applications are licensed, not sold, and this license does not include any right to redistribute, resell or sublicense the Applications.',
    },
    {
      id: 'acceptable-use',
      heading: '4. Acceptable Use',
      body: 'You agree not to:',
      list: [
        'Use the Applications for any unlawful, fraudulent or harmful purpose',
        'Process or store content that you do not have the legal right to process',
        'Record, transcribe or capture conversations without the consent required by applicable law',
        'Reverse engineer, decompile, disassemble or attempt to extract the source code or models of the Applications',
        'Modify, adapt, translate or create derivative works of the Applications',
        'Circumvent, disable or tamper with security or feature restrictions',
        'Use automated systems to access the Applications in a way that sends more requests than a human reasonably could',
        'Interfere with the proper functioning of our website or the Applications',
      ],
    },
    {
      id: 'user-content',
      heading: '5. User Content',
      body: 'You retain all rights to any content you create, import or process within the Applications, including audio files, notes, transcripts and documents. You are solely responsible for the legality of the content you use and for obtaining any consents required to process it. Loxavo claims no ownership over your content and, by design, your content is not transmitted to us except where you explicitly choose to export or share it.',
    },
    {
      id: 'intellectual-property',
      heading: '6. Intellectual Property',
      body: 'All right, title and interest in and to our website and the Applications — including their design, source code, icons, names, logos, documentation and visual assets — are owned by Loxavo and are protected by applicable intellectual property laws. The "Loxavo" name and logo are trademarks of Loxavo. Nothing in these Terms grants you any right to use our trademarks except as strictly necessary to describe the Applications.',
      subsections: [
        {
          heading: 'Open-source and third-party components',
          body: 'The Applications may include open-source and third-party software components, each used under the terms of its respective license. A list of such components is available within the Applications where required by their licenses.',
        },
      ],
    },
    {
      id: 'third-party-services',
      heading: '7. Third-Party Services',
      body: 'The Applications may interoperate with features provided by Apple, Google or other third parties (for example, the operating system, cloud storage, or calendar providers you choose to connect). These services are governed by their own terms and privacy policies, and Loxavo is not responsible for their practices.',
    },
    {
      id: 'disclaimers',
      heading: '8. Disclaimers',
      body: 'Our website and the Applications are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express, implied or statutory. We do not warrant that the Applications will be uninterrupted, error-free, secure, or compatible with every device or operating system version, or that any AI-assisted output will be accurate or complete. Your use is at your sole risk.',
    },
    {
      id: 'limitation-of-liability',
      heading: '9. Limitation of Liability',
      body: 'To the maximum extent permitted by law, Loxavo and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, content, profits or savings, arising out of or related to your use of our website or the Applications. Our total aggregate liability for any claim shall not exceed the amount you paid us for the relevant Application in the twelve months preceding the claim, or USD $50 if you have not made any purchase. Nothing in these Terms limits liability that cannot be limited under applicable law.',
    },
    {
      id: 'indemnification',
      heading: '10. Indemnification',
      body: 'You agree to indemnify and hold Loxavo harmless from any claims, damages, losses and expenses (including reasonable legal fees) arising from your use of the Applications, your violation of these Terms, your processing of content without required consents, or your infringement of any third-party rights.',
    },
    {
      id: 'termination',
      heading: '11. Termination',
      body: 'We may suspend or restrict your access to our website or the Applications if you breach these Terms or if we reasonably believe you are misusing them. You may stop using the Applications at any time by deleting them. Sections that by their nature should survive — including intellectual property, disclaimers, limitation of liability and indemnification — will remain in effect after termination.',
    },
    {
      id: 'governing-law',
      heading: '12. Governing Law & Disputes',
      body: 'These Terms are governed by the laws applicable to your jurisdiction of residence, without regard to conflict-of-law principles. Before initiating litigation, you agree to first contact us in good faith to attempt to resolve the dispute. Nothing in these Terms limits any statutory consumer rights you may have in your country of residence.',
    },
    {
      id: 'changes',
      heading: '13. Changes to These Terms',
      body: 'We may revise these Terms from time to time. The "Last updated" date above reflects the latest version. We will indicate material changes within the Applications or on this page. Continued use of our website or the Applications after a change constitutes acceptance of the revised Terms.',
    },
    {
      id: 'contact',
      heading: '14. Contact',
      body: 'Questions about these Terms? Contact us at support@loxavo.site or through the Contact page.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'Terms & Conditions', view: 'terms' },
    { label: 'Subscription Terms', view: 'subscription' },
  ],
}

// ---------------------------------------------------------------
// 3. TERMS & CONDITIONS
// ---------------------------------------------------------------
export const TERMS_CONDITIONS: LegalDoc = {
  view: 'terms',
  title: 'Terms & Conditions',
  navLabel: 'Terms & Conditions',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'These Terms & Conditions ("Conditions") set out the binding conditions under which you may download, install and use all applications published by Loxavo (the "Applications"). They form part of, and should be read together with, our Terms of Use. By downloading or using any Application, you agree to these Conditions. If you do not agree, do not download or use the Applications. These Conditions apply to all applications published by Loxavo, current and future.',
  seo: {
    title: 'Terms & Conditions — Loxavo',
    description:
      'Terms & Conditions for all applications published by Loxavo. Covers license scope, user responsibilities, app-store compliance, updates, refunds and dispute resolution.',
    canonical: 'https://loxavo.site/#terms',
  },
  sections: [
    {
      id: 'acceptance',
      heading: '1. Acceptance of Conditions',
      body: 'By downloading an Application from Apple\'s App Store or Google Play, or by using it, you confirm that you accept these Conditions and our Privacy Policy. Your use is also subject to the terms of the applicable store (Apple\'s App Store Terms of Service or Google Play\'s Terms of Service), which govern your relationship with the store.',
      related: [{ label: 'Privacy Policy', view: 'privacy' }],
    },
    {
      id: 'license-scope',
      heading: '2. License Scope',
      body: 'Loxavo grants you a limited, non-exclusive, non-transferable license to install and use each Application on devices that you own or control, for your personal use. This license is worldwide, royalty-free for the free version, and terminates automatically if you breach these Conditions or delete the Application.',
    },
    {
      id: 'user-responsibilities',
      heading: '3. Your Responsibilities',
      body: 'When using the Applications, you are responsible for:',
      list: [
        'Ensuring you have the legal right to access, play, record, transcribe or otherwise process any content you import',
        'Obtaining the consent of all participants before recording or transcribing conversations where required by law',
        'Maintaining the security of your device and your accounts with Apple or Google',
        'All activity that occurs on your device in connection with the Applications',
        'Complying with all applicable laws, including privacy, recording and intellectual property laws',
      ],
    },
    {
      id: 'content-and-permissions',
      heading: '4. Content & Permissions',
      body: 'The Applications may request device permissions — such as access to media, files, microphone, camera or speech recognition — only to provide the features you choose to use. You may grant or revoke these permissions at any time through your device settings; revoking a permission will disable the features that depend on it. Your content remains yours and is not licensed to Loxavo.',
    },
    {
      id: 'app-store-compliance',
      heading: '5. App Store & Play Store Compliance',
      body: 'Each Application complies with the Apple App Store Review Guidelines and the Google Play Developer Program Policies. Where a store\'s terms conflict with these Conditions, the store\'s terms prevail for the transaction itself (for example, billing and refunds). For purchases and subscriptions, our Purchase & Subscription Terms also apply.',
      related: [{ label: 'Subscription Terms', view: 'subscription' }],
    },
    {
      id: 'updates',
      heading: '6. Updates',
      body: 'We may release updates to the Applications from time to time through the App Store or Google Play. Updates may add, change or remove features, and may be required to continue using the Applications. By installing an update, you agree to the revised version of the Application and, where indicated, to any updated Conditions.',
    },
    {
      id: 'purchases',
      heading: '7. Purchases & Subscriptions',
      body: 'Some Applications offer optional paid features. All purchases are processed by Apple or Google, and refunds are handled by the relevant store in accordance with its refund policy. Full details are in our Purchase & Subscription Terms.',
      related: [{ label: 'Subscription Terms', view: 'subscription' }],
    },
    {
      id: 'ai-features',
      heading: '8. AI-Assisted Features',
      body: 'Where an Application includes AI-assisted features (such as transcription or summarization), those features are designed to process your content on your device. AI output may be inaccurate or incomplete, and you should review it before relying on it. See our AI Disclosure for details.',
      related: [{ label: 'AI Disclosure', view: 'ai-disclosure' }],
    },
    {
      id: 'disclaimers',
      heading: '9. Disclaimers',
      body: 'The Applications are provided "AS IS" and "AS AVAILABLE". We do not warrant that they will be uninterrupted, error-free, or compatible with every device, file format, or operating system version, or that AI-assisted output will be accurate. You use the Applications at your own risk.',
    },
    {
      id: 'limitation-of-liability',
      heading: '10. Limitation of Liability',
      body: 'To the maximum extent permitted by law, Loxavo and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, content, profits or savings, arising out of or related to your use of the Applications. Our total liability for any claim shall not exceed the amount you paid us for the Application in the twelve months preceding the claim, or USD $50 if you have not made any purchase.',
    },
    {
      id: 'indemnification',
      heading: '11. Indemnification',
      body: 'You agree to indemnify and hold Loxavo harmless from any claims, damages, losses or expenses (including reasonable legal fees) arising from your misuse of the Applications, your violation of these Conditions, your processing of content without required consents, or your infringement of any third-party rights.',
    },
    {
      id: 'termination',
      heading: '12. Termination',
      body: 'We may suspend or terminate your license to use an Application if you breach these Conditions. You may stop using an Application at any time by deleting it. Sections that by their nature should survive will remain in effect after termination.',
    },
    {
      id: 'dispute-resolution',
      heading: '13. Governing Law & Dispute Resolution',
      body: 'These Conditions are governed by the laws of your jurisdiction of residence. Before initiating litigation, you agree to first contact us in good faith to resolve the dispute informally. Where required by law, consumers may bring proceedings in their country of residence, and nothing in these Conditions limits any non-waivable statutory consumer rights.',
    },
    {
      id: 'changes',
      heading: '14. Changes to These Conditions',
      body: 'We may revise these Conditions. The "Last updated" date reflects the latest version, and we will indicate material changes within the Applications or on this page. Continued use of the Applications after a change constitutes acceptance of the revised Conditions.',
    },
    {
      id: 'contact',
      heading: '15. Contact',
      body: 'Questions about these Conditions? Contact us at support@loxavo.site or through the Contact page.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Terms of Use', view: 'terms-of-use' },
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'Subscription Terms', view: 'subscription' },
    { label: 'AI Disclosure', view: 'ai-disclosure' },
  ],
}

// ---------------------------------------------------------------
// 4. PURCHASE & SUBSCRIPTION TERMS
// ---------------------------------------------------------------
export const SUBSCRIPTION_TERMS: LegalDoc = {
  view: 'subscription',
  title: 'Purchase & Subscription Terms',
  navLabel: 'Subscription Terms',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'These Purchase & Subscription Terms ("Purchase Terms") apply to any in-app purchases, subscriptions and paid features offered in any application published by Loxavo. They form part of our Terms & Conditions. The terms of Apple\'s App Store or Google Play also apply to every transaction. These Purchase Terms apply generally to all applications published by Loxavo.',
  seo: {
    title: 'Purchase & Subscription Terms — Loxavo',
    description:
      'Purchase & Subscription Terms for all applications published by Loxavo. Covers billing, auto-renewal, free trials, restoration, family sharing and refunds via Apple and Google.',
    canonical: 'https://loxavo.site/#subscription',
  },
  sections: [
    {
      id: 'overview',
      heading: '1. Overview of Paid Offerings',
      body: 'Our Applications are free to download and use. Some Applications offer optional purchases to unlock premium features, which may be offered as one-time purchases or as recurring subscriptions (for example, monthly or annual "Pro" plans). The specific features, prices and terms for any paid offering are displayed within the relevant Application before you confirm a purchase.',
      subsections: [
        {
          heading: 'Pricing',
          body: 'Prices are shown in your local currency where supported and may vary by region. Applicable taxes are added where required by law. We may change pricing for new subscribers; existing subscriptions renew at the then-current rate unless you cancel before the renewal date.',
        },
      ],
    },
    {
      id: 'billing',
      heading: '2. Billing & Payment',
      body: 'All payments are processed by Apple (through your Apple ID) or Google (through your Google account). Loxavo never receives or stores your full payment card details. By confirming a purchase, you authorize the applicable store to charge the payment method associated with your account.',
    },
    {
      id: 'auto-renewal',
      heading: '3. Subscription Auto-Renewal',
      body: 'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period.',
      list: [
        'Your account will be charged for renewal within 24 hours prior to the end of the current period.',
        'You can manage or cancel a subscription at any time in your device settings (Apple: Settings → your Apple ID → Subscriptions; Google: Play Store → profile → Payments & subscriptions → Subscriptions).',
        'Turning off auto-renew at least 24 hours before the period ends prevents the next charge.',
        'If you cancel, you keep access to the paid features until the end of the already-paid period.',
      ],
    },
    {
      id: 'free-trials',
      heading: '4. Free Trials & Introductory Offers',
      body: 'If we offer a free trial or introductory price, it is typically available to new subscribers only and is clearly disclosed before you start it. A free trial converts to a paid subscription at the end of the trial unless you cancel at least 24 hours before the trial ends. Starting a trial may require a payment method on file with Apple or Google, and authorization for a future charge that you can cancel.',
    },
    {
      id: 'restoration',
      heading: '5. Restoration of Purchases',
      body: 'If you reinstall an Application, switch devices, or reset your device, you can restore your prior purchases using the "Restore Purchases" option in the Application\'s settings. One-time purchases and active subscriptions are restored free of charge using your Apple ID or Google account, subject to the store\'s device and family-sharing limits.',
    },
    {
      id: 'family-sharing',
      heading: '6. Family Sharing',
      body: 'Where supported by Apple or Google, certain purchases may be shareable with your family group. Whether a subscription can be shared depends on the store\'s current family-sharing policy for the relevant product, which is outside Loxavo\'s control.',
    },
    {
      id: 'refunds',
      heading: '7. Refunds',
      body: 'Because Apple and Google process all transactions, refund requests must be submitted to the relevant store. For Apple, request a refund at reportaproblem.apple.com or via Apple Support. For Google, use the Play Store refund flow or Google Support. Loxavo is unable to issue refunds directly. Statutory refund rights in your country of residence remain unaffected where applicable.',
    },
    {
      id: 'feature-changes',
      heading: '8. Changes to Paid Features',
      body: 'We may add, modify or remove premium features over time. Substantial reductions to the features included in your plan during an active paid period will be communicated in advance where reasonably possible. We are not liable for changes to features that depend on Apple, Google or third-party capabilities beyond our control.',
    },
    {
      id: 'no-cash-value',
      heading: '9. No Cash Value & Non-Transferable',
      body: 'Purchases have no cash value, are non-transferable between accounts, and cannot be exchanged for cash. Selling, trading or sharing purchase receipts outside the mechanisms approved by Apple or Google is prohibited and may result in loss of access.',
    },
    {
      id: 'compliance',
      heading: '10. Compliance with App Store & Play Store Rules',
      body: 'All paid offerings comply with the Apple App Store Review Guidelines and the Google Play Developer Program Policies. Subscription lengths, pricing tiers and renewal disclosures meet the requirements of the relevant store. In case of any conflict between these Purchase Terms and the store\'s terms, the store\'s terms prevail for the transaction itself.',
    },
    {
      id: 'contact',
      heading: '11. Contact',
      body: 'For billing or purchase questions, contact support@loxavo.site or use the Contact page. For transaction or refund issues, please also contact Apple Support or Google Support as appropriate.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Terms & Conditions', view: 'terms' },
    { label: 'Terms of Use', view: 'terms-of-use' },
    { label: 'Privacy Policy', view: 'privacy' },
  ],
}

// ---------------------------------------------------------------
// 5. COOKIE POLICY
// ---------------------------------------------------------------
export const COOKIE_POLICY: LegalDoc = {
  view: 'cookie-policy',
  title: 'Cookie Policy',
  navLabel: 'Cookie Policy',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'This Cookie Policy explains how Loxavo uses cookies and similar technologies on our website. It applies to all visitors of our website. Our mobile Applications do not use cookies. This Policy should be read together with our Privacy Policy, which explains how we handle personal information more generally.',
  seo: {
    title: 'Cookie Policy — Loxavo',
    description:
      'How Loxavo uses cookies and similar technologies on its website. Our applications do not use cookies. Essential cookies only, with management instructions.',
    canonical: 'https://loxavo.site/#cookie-policy',
  },
  sections: [
    {
      id: 'what-are-cookies',
      heading: '1. What Are Cookies',
      body: 'Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over time. Similar technologies include web storage (such as local storage and session storage) and pixel tags. In this Policy, "cookies" refers to all of these technologies.',
    },
    {
      id: 'how-we-use-cookies',
      heading: '2. How We Use Cookies',
      body: 'We use cookies only to the extent necessary for our website to function and to understand, in aggregate, how the website is used so that we can improve it. We do not use cookies to build personal profiles of you for advertising, and we do not share cookie data with advertising networks.',
    },
    {
      id: 'types-of-cookies',
      heading: '3. Types of Cookies We Use',
      body: 'We use the following categories of cookies:',
      list: [
        'Essential cookies — required for the website to function (for example, remembering your cookie preferences). These cannot be disabled if you wish to use the website.',
        'Functional cookies — allow the website to remember choices you make (such as language) to provide a more personalized experience.',
        'Analytics cookies — where used, these are anonymized and aggregated, and help us understand how visitors use the website so we can improve it. They are strictly opt-in where required by law.',
      ],
    },
    {
      id: 'third-party-cookies',
      heading: '4. Third-Party Cookies',
      body: 'We do not allow third-party advertising or tracking cookies on our website. Where a third-party service is embedded (for example, a social media link), that service may set its own cookies subject to its own policy. We encourage you to review the policies of any third-party services you interact with.',
    },
    {
      id: 'managing-cookies',
      heading: '5. Managing & Deleting Cookies',
      body: 'You can control and delete cookies through your browser settings at any time. Most browsers allow you to refuse cookies or to alert you when cookies are being sent. Disabling essential cookies may affect the functionality of our website. The links below describe how to manage cookies in popular browsers:',
      list: [
        'Google Chrome — chrome://settings/cookies',
        'Safari — Preferences → Privacy',
        'Mozilla Firefox — Preferences → Privacy & Security',
        'Microsoft Edge — Settings → Cookies and site permissions',
      ],
    },
    {
      id: 'cookies-in-our-apps',
      heading: '6. Cookies in Our Applications',
      body: 'Our mobile Applications do not use cookies. They may use local on-device storage to remember your preferences and content, which is described in our Privacy Policy and is not transmitted to us.',
      related: [{ label: 'Privacy Policy', view: 'privacy' }],
    },
    {
      id: 'legal-basis',
      heading: '7. Legal Basis (EEA, UK, Switzerland)',
      body: 'Where required by law, our use of non-essential cookies is based on your consent. You can withdraw consent at any time by clearing your cookies or adjusting your browser settings. Essential cookies are processed on the legal basis of legitimate interests necessary to provide the website you have requested.',
    },
    {
      id: 'changes',
      heading: '8. Changes to This Policy',
      body: 'We may update this Cookie Policy from time to time. The "Last updated" date reflects the latest version. We will indicate material changes on this page.',
    },
    {
      id: 'contact',
      heading: '9. Contact',
      body: 'Questions about this Cookie Policy? Contact us at privacy@loxavo.site or through the Contact page.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'Transparency', view: 'transparency' },
  ],
}

// ---------------------------------------------------------------
// 6. AI DISCLOSURE
// ---------------------------------------------------------------
export const AI_DISCLOSURE: LegalDoc = {
  view: 'ai-disclosure',
  title: 'AI Disclosure',
  navLabel: 'AI Disclosure',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'This AI Disclosure explains how artificial intelligence ("AI") features may be used in applications published by Loxavo, and the responsibilities you should be aware of when using them. It applies to all applications published by Loxavo that include AI-assisted functionality, current and future. Our core principle is that, wherever possible, AI runs on your device and your content is not sent to the cloud.',
  seo: {
    title: 'AI Disclosure — Loxavo',
    description:
      'How Loxavo uses AI in its applications: on-device processing, no cloud upload of your content, output accuracy limits, and your responsibilities when relying on AI output.',
    canonical: 'https://loxavo.site/#ai-disclosure',
  },
  sections: [
    {
      id: 'overview',
      heading: '1. Overview of AI Features',
      body: 'Some applications published by Loxavo include AI-assisted features — for example transcription, summarization, content organization, or interactive assistance. These features are designed to help you work with content you provide. Not every application includes AI features, and AI features are always optional: the core functions of each application remain usable without them where technically possible.',
    },
    {
      id: 'on-device-processing',
      heading: '2. On-Device Processing',
      body: 'Wherever technically feasible, AI processing runs entirely on your device using on-device models. This means the content you process — such as audio, images or text — is not uploaded to Loxavo\'s servers or to any third-party cloud service in order to provide the AI feature. This keeps your content private and allows the feature to work without an internet connection.',
    },
    {
      id: 'no-cloud-ai-for-your-content',
      heading: '3. No Cloud AI for Your Content',
      body: 'We do not send your content to cloud-based AI services to generate AI output, except where you have explicitly chosen a feature that requires it (and where that is the case, it is clearly disclosed before you use it). If we ever introduce cloud-based AI features, we will describe them clearly, obtain your consent where required, and update this Disclosure.',
    },
    {
      id: 'output-accuracy',
      heading: '4. AI Output Accuracy',
      body: 'AI-generated output — including transcriptions, summaries and answers — may contain errors, omissions or inaccuracies. It is generated by statistical models and does not "understand" content in the way a human does. You should always review AI output for accuracy and appropriateness before relying on it, especially for important, legal, medical or financial matters.',
    },
    {
      id: 'your-responsibility',
      heading: '5. Your Responsibility for AI-Assisted Content',
      body: 'You are responsible for the content you process using AI features and for any output you create, share or act upon. In particular, you are responsible for:',
      list: [
        'Ensuring you have the right to process the content you provide to AI features',
        'Obtaining any consents required before recording or transcribing conversations',
        'Reviewing AI output for accuracy before relying on it or sharing it with others',
        'How you use and distribute any output generated with AI assistance',
      ],
    },
    {
      id: 'bias-and-fairness',
      heading: '6. Bias, Fairness & Limitations',
      body: 'AI models can reflect biases present in their training data and may perform differently across languages, accents, names and contexts. We select on-device models with a focus on broad, fair performance, but we cannot guarantee that output is free from bias or suitable for every situation. If you encounter harmful or biased output, please let us know through the Contact page.',
    },
    {
      id: 'transparency',
      heading: '7. Transparency',
      body: 'When an application presents AI-generated content, we aim to make it clear that the content was produced or shaped by AI. We do not present AI output as human-created, and we do not use AI to impersonate real people without their consent.',
      related: [{ label: 'Transparency', view: 'transparency' }],
    },
    {
      id: 'children',
      heading: '8. Children',
      body: 'AI features in our Applications are not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly allow children to use AI features, and we do not knowingly collect personal data from children as described in our Privacy Policy.',
      related: [{ label: 'Privacy Policy', view: 'privacy' }],
    },
    {
      id: 'data-handling',
      heading: '9. Data Handling & Privacy',
      body: 'Because AI processing happens on your device, your content is not retained by Loxavo and is not used to train our models. Any AI output you choose to save is stored locally on your device under your control, as described in our Privacy Policy.',
    },
    {
      id: 'changes',
      heading: '10. Changes to This Disclosure',
      body: 'As AI technology and regulation evolve, we may update this Disclosure. The "Last updated" date reflects the latest version, and material changes will be indicated within the Applications or on this page.',
    },
    {
      id: 'contact',
      heading: '11. Contact',
      body: 'Questions about how Loxavo uses AI? Contact us at privacy@loxavo.site or through the Contact page.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'Terms & Conditions', view: 'terms' },
    { label: 'Transparency', view: 'transparency' },
  ],
}

// ---------------------------------------------------------------
// 7. TRANSPARENCY
// ---------------------------------------------------------------
export const TRANSPARENCY: LegalDoc = {
  view: 'transparency',
  title: 'Transparency',
  navLabel: 'Transparency',
  lastUpdated: UPDATED,
  effective: EFFECTIVE,
  intro:
    'At Loxavo we believe you should be able to understand, in plain language, who we are, what our products do, how we handle your data, and how our business works. This Transparency page brings that information together in one place. It applies to all applications published by Loxavo, current and future, and to our website.',
  seo: {
    title: 'Transparency — Loxavo',
    description:
      'Loxavo transparency report: who we are, our products, data practices, business model, ownership, open-source use, security and how we handle government requests.',
    canonical: 'https://loxavo.site/#transparency',
  },
  sections: [
    {
      id: 'who-we-are',
      heading: '1. Who We Are',
      body: 'Loxavo is an independent software studio that designs and publishes mobile applications. We are committed to building products that are private by default, work offline where possible, and contain no advertising. Our contact details are available on the Contact page.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
    {
      id: 'our-products',
      heading: '2. Our Products',
      body: 'We publish mobile applications for iOS and Android. Each application is listed on our website and on the Apple App Store or Google Play. Our applications are designed around clear, honest functionality: we describe what each application does and does not do, and we do not use deceptive design patterns to push you toward purchases.',
    },
    {
      id: 'data-practices',
      heading: '3. Our Data Practices',
      body: 'Our applications are built to be offline-first. In practice this means:',
      list: [
        'We do not require you to create an account to use our applications.',
        'We do not collect personal data, usage history or behavioural profiles from our applications.',
        'We do not embed third-party advertising or behavioural tracking SDKs in our applications.',
        'Content you create or import — such as audio, notes or transcripts — stays on your device unless you explicitly export or share it.',
        'Where AI features exist, they are designed to run on your device.',
      ],
      related: [
        { label: 'Privacy Policy', view: 'privacy' },
        { label: 'AI Disclosure', view: 'ai-disclosure' },
      ],
    },
    {
      id: 'business-model',
      heading: '4. Our Business Model',
      body: 'Our applications are free to download and use. Some applications offer optional in-app purchases or subscriptions ("Pro" features) that unlock additional capabilities. We do not sell advertising, we do not sell personal data, and we do not receive revenue from third parties in exchange for your data. This means our incentives are aligned with yours, not with advertisers.',
      related: [{ label: 'Subscription Terms', view: 'subscription' }],
    },
    {
      id: 'ownership-and-affiliations',
      heading: '5. Ownership & Affiliations',
      body: 'Loxavo is independently owned. We are not owned by, and do not share data with, any advertising network, data broker or larger technology conglomerate. Where we use third-party services (such as Apple and Google for payment processing), those relationships are limited to the function they perform and are governed by their own policies.',
    },
    {
      id: 'open-source',
      heading: '6. Open-Source & Third-Party Components',
      body: 'Our applications are built using a combination of our own code and open-source or licensed third-party components. We respect the licenses of those components and, where required, list them within the applications. We contribute back to the open-source community where we are able.',
    },
    {
      id: 'security-practices',
      heading: '7. Security Practices',
      body: 'We follow reasonable security practices for our website and support infrastructure, including encryption in transit. The data created within our applications is protected by the operating system and, by design, is not transmitted to us. We will promptly notify affected users if we become aware of a security incident that materially affects their data, where we are able to do so.',
    },
    {
      id: 'government-requests',
      heading: '8. Government & Third-Party Requests',
      body: 'We do not have content or personal data to disclose from our applications, because that data stays on your device. If we ever receive a legally binding request for data we do hold (such as a contact-form message), we will review it carefully, disclose only what is legally required, and aim to be transparent about such requests in aggregate where the law allows.',
    },
    {
      id: 'accessibility',
      heading: '9. Accessibility & Inclusivity',
      body: 'We design our applications to be usable by as many people as possible, including those who rely on system accessibility features. We support the accessibility capabilities of iOS and Android and continue to improve support over time.',
    },
    {
      id: 'changes',
      heading: '10. Changes to Our Practices',
      body: 'As we grow and as technology and regulation evolve, our practices may change. We will update this page when they do, and we will indicate material changes clearly. Where a change affects your rights, we will also update the relevant legal document.',
    },
    {
      id: 'contact',
      heading: '11. Contact',
      body: 'If anything on this page is unclear, or you would like more detail about any of our practices, contact us at privacy@loxavo.site or through the Contact page. We aim to respond in plain language.',
      related: [{ label: 'Contact', view: 'contact' }],
    },
  ],
  related: [
    { label: 'Privacy Policy', view: 'privacy' },
    { label: 'AI Disclosure', view: 'ai-disclosure' },
    { label: 'Cookie Policy', view: 'cookie-policy' },
  ],
}

// ---------------------------------------------------------------
// Registry: ordered list + lookup
// ---------------------------------------------------------------
export const LEGAL_DOCS: LegalDoc[] = [
  PRIVACY_POLICY,
  TERMS_OF_USE,
  TERMS_CONDITIONS,
  SUBSCRIPTION_TERMS,
  COOKIE_POLICY,
  AI_DISCLOSURE,
  TRANSPARENCY,
]

export const LEGAL_DOCS_BY_VIEW: Record<string, LegalDoc> = LEGAL_DOCS.reduce(
  (acc, doc) => {
    acc[doc.view] = doc
    return acc
  },
  {} as Record<string, LegalDoc>
)

export function getLegalDoc(view: string): LegalDoc | undefined {
  return LEGAL_DOCS_BY_VIEW[view]
}

// Items shown in the footer "Legal" section (documents + contact).
export const LEGAL_NAV: { label: string; view: string }[] = [
  ...LEGAL_DOCS.map((d) => ({ label: d.navLabel, view: d.view })),
  { label: 'Contact', view: 'contact' },
]
