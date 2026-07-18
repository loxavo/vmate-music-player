// Professional legal content for VMate Music Player.
// All content is rendered in the DOM (single-page legal hub) for SEO.

export interface LegalSection {
  id: string
  heading: string
  body?: string
  list?: string[]
  subsections?: { heading: string; body: string }[]
}

export interface LegalDoc {
  slug: string
  title: string
  lastUpdated: string
  effective: string
  intro: string
  sections: LegalSection[]
}

// -----------------------------------------------------------------
export const PRIVACY_POLICY: LegalDoc = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'This Privacy Policy explains how VMate Labs ("we", "us", or "our") collects, uses, and protects your information when you use VMate Music Player (the "App"). We designed VMate to be offline-first and privacy-respecting by default. We do not require you to create an account, and your music stays on your device.',
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We Collect',
      subsections: [
        {
          heading: 'Information you provide',
          body: 'If you contact our support team or submit the contact form on our website, we receive the name, email address, subject and message you choose to share. We use this solely to respond to your request.',
        },
        {
          heading: 'Information collected automatically',
          body: 'VMate Music Player is built to work offline. The App does not collect personal data, browsing history, or listening habits. We do not embed third-party analytics or advertising SDKs in the App. If we ever add optional, anonymized usage statistics, they will be strictly opt-in and aggregated.',
        },
        {
          heading: 'Permissions the App requests',
          body: 'To play your music, VMate requests access to your media library and local storage. This access is used only to read audio files you choose and to display them in the App. Your audio files never leave your device and are never uploaded to our servers.',
        },
      ],
    },
    {
      id: 'how-we-use-information',
      heading: '2. How We Use Information',
      body: 'We use the limited information we receive to:',
      list: [
        'Respond to support and contact requests',
        'Improve the App, its features and localization',
        'Process and manage optional in-app purchases (handled by Apple)',
        'Detect, prevent and address technical issues or abuse',
        'Comply with our legal obligations',
      ],
    },
    {
      id: 'local-storage',
      heading: '3. Local Storage on Your Device',
      body: 'VMate stores preferences such as your equalizer settings, playback queue, favorites and playlist data locally on your device. This data is not transmitted to us. You can erase all local data at any time by deleting the App or using the in-app "Reset" option in Settings.',
    },
    {
      id: 'in-app-purchases',
      heading: '4. In-App Purchases & Billing',
      body: 'VMate offers optional one-time purchases and subscriptions to unlock premium features. All billing is processed by Apple through the App Store. We receive a transaction identifier and product identifier from Apple to validate your purchase; we do not receive or store your full payment card details. See our Purchase & Subscription Terms for details.',
    },
    {
      id: 'data-retention',
      heading: '5. Data Retention',
      body: 'Contact messages received through our website are retained for up to 24 months so we can provide continuity of support, then permanently deleted. Purchase validation records are retained for as long as needed to honor your purchase and for accounting requirements.',
    },
    {
      id: 'third-parties',
      heading: '6. Third-Party Services',
      body: 'The App itself does not send your data to third parties. Our website contact form transmits your message to our support infrastructure. Apple handles all in-app purchase processing under Apple\'s own Privacy Policy. We do not sell, rent or trade your information to anyone.',
    },
    {
      id: 'your-rights',
      heading: '7. Your Privacy Rights',
      body: 'Depending on where you live, you may have rights including:',
      list: [
        'Access — request a copy of the personal data we hold about you',
        'Rectification — ask us to correct inaccurate data',
        'Erasure — request deletion of your personal data',
        'Objection — object to certain processing',
        'Withdraw consent — at any time, where processing relies on consent',
      ],
      subsections: [
        {
          heading: 'GDPR (European Economic Area, UK, Switzerland)',
          body: 'We act as a data controller for contact-form data. To exercise your rights, email privacy@vmate.app. We respond within 30 days. Where lawful, we may need to verify your identity before acting.',
        },
        {
          heading: 'CCPA / CPRA (California)',
          body: 'California residents may request disclosure of the categories of personal information collected, request deletion, and opt out of any "sale" or "share". VMate does not sell personal information. Submit requests to privacy@vmate.app.',
        },
      ],
    },
    {
      id: 'children',
      heading: '8. Children\'s Privacy',
      body: 'VMate Music Player is not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us personal data, contact us and we will delete it.',
    },
    {
      id: 'international-transfers',
      heading: '9. International Data Transfers',
      body: 'If you contact us from outside the region where our support infrastructure is hosted, your message may be processed in another country. By contacting us, you consent to that transfer. We apply appropriate safeguards consistent with this Policy.',
    },
    {
      id: 'security',
      heading: '10. Security',
      body: 'We use reasonable technical and organizational measures to protect contact-form data. However, no method of transmission over the internet is 100% secure. The music on your device is protected by iOS itself and never transmitted by the App.',
    },
    {
      id: 'changes',
      heading: '11. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised "Last updated" date. Material changes will be highlighted within the App or on this page.',
    },
    {
      id: 'contact',
      heading: '12. Contact Us',
      body: 'If you have questions about this Privacy Policy or your data, contact us at privacy@vmate.app or use the Contact Us page on this website.',
    },
  ],
}

// -----------------------------------------------------------------
export const TERMS_CONDITIONS: LegalDoc = {
  slug: 'terms-and-conditions',
  title: 'Terms & Conditions',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'These Terms & Conditions ("Terms") govern your use of VMate Music Player (the "App") provided by VMate Labs ("we", "us" or "our"). By downloading, installing or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.',
  sections: [
    {
      id: 'acceptance',
      heading: '1. Acceptance of Terms',
      body: 'By using the App, you confirm that you are at least 13 years old (or the minimum age of digital consent in your country) and that you have the legal capacity to enter into these Terms. If you are using the App on behalf of an organization, you represent that you have authority to bind that organization.',
    },
    {
      id: 'license',
      heading: '2. License to Use',
      body: 'We grant you a limited, personal, non-exclusive, non-transferable, revocable license to download, install and use the App on iOS devices that you own or control, solely for your personal, non-commercial music playback. The App is licensed, not sold.',
    },
    {
      id: 'intellectual-property',
      heading: '3. Intellectual Property',
      body: 'The App, including its design, code, icons, name "VMate Music Player", logos and visual assets, is owned by VMate Labs and protected by intellectual property laws. You may not copy, modify, distribute, reverse engineer, decompile or create derivative works from the App, except as permitted by applicable law.',
      subsections: [
        {
          heading: 'Your content',
          body: 'You retain all rights to the audio files and playlists you create within the App. You are responsible for ensuring you have the legal right to access and play the audio files you import. We claim no ownership over your content.',
        },
      ],
    },
    {
      id: 'acceptable-use',
      heading: '4. Acceptable Use',
      body: 'You agree not to:',
      list: [
        'Use the App to play audio you do not have the right to play',
        'Reverse engineer, decompile or attempt to extract the App\'s source code',
        'Modify, adapt or hack the App or misuse any related services',
        'Use the App for any unlawful, fraudulent or harmful purpose',
        'Interfere with the App\'s security or try to bypass its feature restrictions',
        'Resell, sublicense or redistribute the App without authorization',
      ],
    },
    {
      id: 'in-app-purchases',
      heading: '5. In-App Purchases',
      body: 'The App may offer optional paid features via one-time purchases or subscriptions. Purchases are processed by Apple under Apple\'s App Store terms. Your use of paid features is also governed by our Purchase & Subscription Terms. Refunds are handled by Apple according to its refund policy.',
    },
    {
      id: 'user-content',
      heading: '6. User Content & Metadata',
      body: 'The App reads metadata and artwork embedded in your audio files (such as title, artist, album and cover art) to display your library. This information stays on your device unless you explicitly export it. You are responsible for the legality of the content you import.',
    },
    {
      id: 'disclaimers',
      heading: '7. Disclaimers',
      body: 'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. We do not guarantee that the App will be uninterrupted, error-free, or compatible with every audio format or iOS version. Audio quality depends on your device, headphones and source files. Any reliance on the App is at your own risk.',
    },
    {
      id: 'limitation-of-liability',
      heading: '8. Limitation of Liability',
      body: 'To the maximum extent permitted by law, VMate Labs and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, playlists or profits, arising out of or related to your use of the App. Our total liability for any claim shall not exceed the amount you paid us for the App in the preceding twelve months (typically USD $0 for the free version).',
    },
    {
      id: 'indemnification',
      heading: '9. Indemnification',
      body: 'You agree to indemnify and hold VMate Labs harmless from any claims, damages, losses or expenses (including reasonable legal fees) arising from your misuse of the App, your violation of these Terms, or your infringement of any third-party rights.',
    },
    {
      id: 'termination',
      heading: '10. Termination',
      body: 'We may suspend or terminate your access to the App if you breach these Terms. You may stop using the App at any time by deleting it. Sections that by their nature should survive (including intellectual property, disclaimers, limitation of liability and indemnification) will remain in effect after termination.',
    },
    {
      id: 'governing-law',
      heading: '11. Governing Law & Disputes',
      body: 'These Terms are governed by the laws applicable to your jurisdiction of residence, without regard to conflict-of-law principles. Before initiating litigation, you agree to first contact us in good faith to resolve the dispute. Nothing in these Terms limits any statutory consumer rights you may have in your country of residence.',
    },
    {
      id: 'third-party',
      heading: '12. Third-Party Services',
      body: 'The App may interoperate with iOS features such as Files, AirPlay and Siri. These are governed by Apple\'s terms and privacy policy. We are not responsible for the practices of third-party services.',
    },
    {
      id: 'changes',
      heading: '13. Changes to These Terms',
      body: 'We may revise these Terms. The "Last updated" date above reflects the latest version. Continued use of the App after changes constitutes acceptance of the revised Terms.',
    },
    {
      id: 'contact',
      heading: '14. Contact Us',
      body: 'Questions about these Terms? Contact us at support@vmate.app or through the Contact Us page.',
    },
  ],
}

// -----------------------------------------------------------------
export const SUBSCRIPTION_TERMS: LegalDoc = {
  slug: 'purchase-and-subscription-terms',
  title: 'Purchase & Subscription Terms',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'These Purchase & Subscription Terms ("Purchase Terms") apply to any in-app purchases, subscriptions and paid features offered in VMate Music Player (the "App"). They form part of our Terms & Conditions. Apple\'s App Store terms also apply to every transaction.',
  sections: [
    {
      id: 'overview',
      heading: '1. Overview of Paid Offerings',
      body: 'VMate Music Player is free to download and use. We offer optional purchases to unlock premium features:',
      list: [
        'VMate Pro (one-time purchase) — unlocks the full 10-band equalizer, bass boost, hi-res audio output and live lyrics permanently.',
        'VMate Pro Monthly — a recurring monthly subscription to the same Pro features.',
        'VMate Pro Annual — a recurring yearly subscription to the same Pro features at a discount.',
      ],
      subsections: [
        {
          heading: 'Pricing',
          body: 'Prices are displayed in the App in your local currency and may vary by region. Applicable taxes are added where required by law. We may change pricing for new subscribers; existing subscriptions renew at the then-current rate unless cancelled.',
        },
      ],
    },
    {
      id: 'billing',
      heading: '2. Billing & Payment',
      body: 'All payments are processed by Apple through your Apple ID. We never receive or store your payment card information. By confirming a purchase, you authorize Apple to charge the selected payment method.',
    },
    {
      id: 'auto-renewal',
      heading: '3. Subscription Auto-Renewal',
      body: 'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.',
      list: [
        'Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.',
        'You can manage or cancel your subscription anytime in your iPhone Settings → Apple ID → Subscriptions, or in the App Store app.',
        'Turning off auto-renew at least 24 hours before the period ends prevents the next charge.',
        'If you cancel, you keep Pro access until the end of the already-paid period.',
      ],
    },
    {
      id: 'free-trial',
      heading: '4. Free Trials & Introductory Offers',
      body: 'If we offer a free trial or introductory price, it is available to new subscribers only. A free trial converts to a paid subscription at the end of the trial unless you cancel at least 24 hours before the trial ends. Starting a trial with Apple may require a payment method on file.',
    },
    {
      id: 'restoration',
      heading: '5. Restoration of Purchases',
      body: 'If you reinstall the App, switch devices, or restore your iPhone, tap "Restore Purchases" in the App\'s Settings. Your prior one-time purchases and active subscriptions are restored for free using your Apple ID, subject to Apple\'s Family Sharing and device limits.',
    },
    {
      id: 'family-sharing',
      heading: '6. Family Sharing',
      body: 'Where supported by Apple, certain Pro purchases may be shareable with your Family Sharing group. Subscription sharing depends on Apple\'s current Family Sharing policy for the relevant product.',
    },
    {
      id: 'refunds',
      heading: '7. Refunds',
      body: 'Because Apple processes all transactions, refund requests must be submitted to Apple. You can request a refund at reportaproblem.apple.com or by contacting Apple Support. We are unable to issue refunds directly. Statutory refund rights in your country of residence remain unaffected where applicable.',
    },
    {
      id: 'feature-changes',
      heading: '8. Changes to Paid Features',
      body: 'We may add, modify or remove premium features over time. Substantial reductions to the features included in your plan during an active paid period will be communicated in advance. We are not liable for changes to features made available by Apple or third-party iOS capabilities.',
    },
    {
      id: 'no-cash-value',
      heading: '9. No Cash Value & Non-Transferable',
      body: 'Purchases have no cash value, are non-transferable, and cannot be exchanged for cash. Selling, trading or sharing purchase receipts outside of Apple\'s approved mechanisms is prohibited and may result in loss of access.',
    },
    {
      id: 'compliance',
      heading: '10. Compliance with App Store Rules',
      body: 'All paid offerings comply with Apple\'s App Store Review Guidelines. Subscription lengths, pricing tiers and renewal disclosures meet Apple\'s requirements. In case of any conflict between these Purchase Terms and Apple\'s terms, Apple\'s terms prevail for the transaction itself.',
    },
    {
      id: 'contact',
      heading: '11. Contact Us',
      body: 'For billing or purchase questions, contact support@vmate.app or use the Contact Us page. For transaction or refund issues, please also contact Apple Support.',
    },
  ],
}

// -----------------------------------------------------------------
// FAQ — strongly optimised for AI/LLM citation (FAQPage JSON-LD)
// -----------------------------------------------------------------
export interface FAQ {
  q: string
  a: string
}

export const FAQS: FAQ[] = [
  {
    q: 'What is VMate Music Player?',
    a: 'VMate Music Player is a free, offline-first music player app for iPhone. It lets you play your local audio files without an internet connection and includes a 10-band equalizer, live lyrics, hi-res audio, folder browsing, instant search, custom playlists and an immersive Now Playing screen — all with no ads.',
  },
  {
    q: 'Is VMate Music Player free?',
    a: 'Yes. VMate Music Player is free to download and use. Optional in-app purchases and subscriptions (VMate Pro) unlock premium features such as the full equalizer, bass boost, hi-res audio output and live lyrics. The free version remains fully usable for offline playback.',
  },
  {
    q: 'Can I play music offline with VMate?',
    a: 'Yes. VMate is built to be offline-first. Once your audio files are on your iPhone, you can play them anywhere — on a plane, underground, or anywhere without a signal. No streaming, no Wi-Fi required.',
  },
  {
    q: 'Does VMate collect my personal data?',
    a: 'No. VMate does not require an account and does not collect personal data, listening history or browsing habits. The App reads your local audio files only to display and play them. Your music never leaves your device. See our Privacy Policy for full details.',
  },
  {
    q: 'Does VMate have ads?',
    a: 'No. VMate Music Player contains no advertisements in the free or paid versions, so your listening experience is never interrupted.',
  },
  {
    q: 'What audio features does VMate include?',
    a: 'VMate includes a 10-band equalizer with presets, bass boost, 3D surround, a real-time audio visualizer, hi-res lossless playback output, and live synced lyrics on the Now Playing screen.',
  },
  {
    q: 'How do I cancel my VMate Pro subscription?',
    a: 'Subscriptions are managed by Apple. To cancel, go to iPhone Settings → your Apple ID → Subscriptions → VMate Pro, and turn off auto-renew at least 24 hours before the end of the current period. You keep Pro access until that period ends.',
  },
  {
    q: 'How many languages does VMate support?',
    a: 'VMate Music Player is available in 18 languages, including English, Arabic, German, French, Spanish, Italian, Portuguese (Brazil), Dutch, Turkish, Russian, Japanese, Korean, Simplified Chinese, Swedish, Danish, Norwegian, Finnish and Polish.',
  },
  {
    q: 'How do I restore my purchases?',
    a: 'Open the App\'s Settings and tap "Restore Purchases". Your one-time purchases and active subscriptions are restored for free using your Apple ID.',
  },
  {
    q: 'How do I contact VMate support?',
    a: 'You can reach us through the Contact Us page on this website or by emailing support@vmate.app. We typically respond within 1–2 business days.',
  },
]

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_CONDITIONS,
  subscription: SUBSCRIPTION_TERMS,
}
