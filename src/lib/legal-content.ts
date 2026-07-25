// Studio-wide legal content (Privacy Policy, Terms, Subscription Terms) + general FAQ.
// Per-app FAQs live in the apps registry.

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

export const PRIVACY_POLICY: LegalDoc = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'This Privacy Policy explains how Loxavo Studios ("we", "us", or "our") collects, uses, and protects your information when you use our apps — including VMate Music Player and AI Note Writer: VoiceScribe (the "Apps"). We designed our apps to be offline-first and privacy-respecting by default. We do not require you to create an account, and your data stays on your device.',
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We Collect',
      subsections: [
        { heading: 'Information you provide', body: 'If you contact our support team or submit the contact form on our website, we receive the name, email address, subject and message you choose to share. We use this solely to respond to your request.' },
        { heading: 'Information collected automatically', body: 'Our apps are built to work offline. They do not collect personal data, usage history, or behavioural profiles. We do not embed third-party analytics or advertising SDKs in our apps. If we ever add optional, anonymized usage statistics, they will be strictly opt-in and aggregated.' },
        { heading: 'Permissions the Apps request', body: 'VMate Music Player requests access to your media library and local storage to read and play audio files you choose. VoiceScribe requests microphone access for transcription, photo/camera access for OCR scanning, and speech recognition. Your audio, photos and transcripts never leave your device unless you explicitly export them.' },
      ],
    },
    {
      id: 'how-we-use-information',
      heading: '2. How We Use Information',
      body: 'We use the limited information we receive to:',
      list: ['Respond to support and contact requests', 'Improve our apps, their features and localization', 'Process and manage optional in-app purchases (handled by Apple)', 'Detect, prevent and address technical issues or abuse', 'Comply with our legal obligations'],
    },
    {
      id: 'local-storage',
      heading: '3. Local Storage on Your Device',
      body: 'Our apps store preferences such as equalizer settings, playback queue, transcripts, notes and playlist data locally on your device. This data is not transmitted to us. You can erase all local data at any time by deleting the app or using the in-app "Reset" option in Settings. VoiceScribe processes all AI transcription on-device using on-device models — your audio is never uploaded to any server.',
    },
    {
      id: 'in-app-purchases',
      heading: '4. In-App Purchases & Billing',
      body: 'Our apps may offer optional one-time purchases and subscriptions to unlock premium features. All billing is processed by Apple through the App Store. We receive a transaction identifier and product identifier from Apple to validate your purchase; we do not receive or store your full payment card details. See our Purchase & Subscription Terms for details.',
    },
    {
      id: 'data-retention',
      heading: '5. Data Retention',
      body: 'Contact messages received through our website are retained for up to 24 months so we can provide continuity of support, then permanently deleted. Purchase validation records are retained for as long as needed to honor your purchase and for accounting requirements.',
    },
    {
      id: 'third-parties',
      heading: '6. Third-Party Services',
      body: 'The apps themselves do not send your data to third parties. Our website contact form transmits your message to our support infrastructure. Apple handles all in-app purchase processing under Apple\'s own Privacy Policy. VoiceScribe integrates with Google Calendar and Microsoft Outlook for calendar linking only when you explicitly connect them, governed by those providers\' privacy policies. We do not sell, rent or trade your information to anyone.',
    },
    {
      id: 'your-rights',
      heading: '7. Your Privacy Rights',
      body: 'Depending on where you live, you may have rights including:',
      list: ['Access — request a copy of the personal data we hold about you', 'Rectification — ask us to correct inaccurate data', 'Erasure — request deletion of your personal data', 'Objection — object to certain processing', 'Withdraw consent — at any time, where processing relies on consent'],
      subsections: [
        { heading: 'GDPR (European Economic Area, UK, Switzerland)', body: 'We act as a data controller for contact-form data. To exercise your rights, email privacy@vmate.app. We respond within 30 days. Where lawful, we may need to verify your identity before acting.' },
        { heading: 'CCPA / CPRA (California)', body: 'California residents may request disclosure of the categories of personal information collected, request deletion, and opt out of any "sale" or "share". We do not sell personal information. Submit requests to privacy@vmate.app.' },
      ],
    },
    {
      id: 'children',
      heading: '8. Children\'s Privacy',
      body: 'Our apps are not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us personal data, contact us and we will delete it.',
    },
    {
      id: 'international-transfers',
      heading: '9. International Data Transfers',
      body: 'If you contact us from outside the region where our support infrastructure is hosted, your message may be processed in another country. By contacting us, you consent to that transfer. We apply appropriate safeguards consistent with this Policy.',
    },
    {
      id: 'security',
      heading: '10. Security',
      body: 'We use reasonable technical and organizational measures to protect contact-form data. However, no method of transmission over the internet is 100% secure. Data created inside our apps is protected by iOS itself and, by design, never transmitted by the apps.',
    },
    {
      id: 'changes',
      heading: '11. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised "Last updated" date. Material changes will be highlighted within the apps or on this page.',
    },
    {
      id: 'contact',
      heading: '12. Contact Us',
      body: 'If you have questions about this Privacy Policy or your data, contact us at privacy@vmate.app or use the Contact Us page on this website.',
    },
  ],
}

export const TERMS_CONDITIONS: LegalDoc = {
  slug: 'terms-and-conditions',
  title: 'Terms & Conditions',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'These Terms & Conditions ("Terms") govern your use of our apps — including VMate Music Player and AI Note Writer: VoiceScribe (the "Apps") — provided by Loxavo Studios ("we", "us" or "our"). By downloading, installing or using the Apps, you agree to be bound by these Terms. If you do not agree, please do not use the Apps.',
  sections: [
    { id: 'acceptance', heading: '1. Acceptance of Terms', body: 'By using the Apps, you confirm that you are at least 13 years old (or the minimum age of digital consent in your country) and that you have the legal capacity to enter into these Terms. If you are using the Apps on behalf of an organization, you represent that you have authority to bind that organization.' },
    { id: 'license', heading: '2. License to Use', body: 'We grant you a limited, personal, non-exclusive, non-transferable, revocable license to download, install and use the Apps on iOS devices that you own or control, solely for your personal, non-commercial use. The Apps are licensed, not sold.' },
    {
      id: 'intellectual-property',
      heading: '3. Intellectual Property',
      body: 'The Apps, including their design, code, icons, names, logos and visual assets, are owned by Loxavo Studios (and, for VoiceScribe, by Taoufik Bourehouat) and protected by intellectual property laws. You may not copy, modify, distribute, reverse engineer, decompile or create derivative works from the Apps, except as permitted by applicable law.',
      subsections: [{ heading: 'Your content', body: 'You retain all rights to the audio files, transcripts, notes and documents you create within the Apps. You are responsible for ensuring you have the legal right to record, transcribe and process the audio you import. We claim no ownership over your content.' }],
    },
    {
      id: 'acceptable-use',
      heading: '4. Acceptable Use',
      body: 'You agree not to:',
      list: ['Record or transcribe conversations without the consent of participants where required by law', 'Use the Apps to process audio or documents you do not have the right to process', 'Reverse engineer, decompile or attempt to extract the Apps\' source code or AI models', 'Modify, adapt or hack the Apps or misuse any related services', 'Use the Apps for any unlawful, fraudulent or harmful purpose', 'Interfere with the Apps\' security or try to bypass their feature restrictions', 'Resell, sublicense or redistribute the Apps without authorization'],
    },
    { id: 'in-app-purchases', heading: '5. In-App Purchases', body: 'The Apps may offer optional paid features via one-time purchases or subscriptions. Purchases are processed by Apple under Apple\'s App Store terms. Your use of paid features is also governed by our Purchase & Subscription Terms. Refunds are handled by Apple according to its refund policy.' },
    { id: 'user-content', heading: '6. User Content & Metadata', body: 'The Apps read metadata, artwork and audio embedded in your files (such as title, artist, album, cover art, or spoken audio) to provide their features. This information stays on your device unless you explicitly export it. You are responsible for the legality of the content you import and process.' },
    { id: 'disclaimers', heading: '7. Disclaimers', body: 'The Apps are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. We do not guarantee that the Apps will be uninterrupted, error-free, or compatible with every audio format or iOS version. Transcription accuracy depends on audio quality, language and speaker clarity. Any reliance on the Apps is at your own risk.' },
    { id: 'limitation-of-liability', heading: '8. Limitation of Liability', body: 'To the maximum extent permitted by law, Loxavo Studios and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, transcripts, notes or profits, arising out of or related to your use of the Apps. Our total liability for any claim shall not exceed the amount you paid us for the App in the preceding twelve months (typically USD $0 for the free version).' },
    { id: 'indemnification', heading: '9. Indemnification', body: 'You agree to indemnify and hold Loxavo Studios harmless from any claims, damages, losses or expenses (including reasonable legal fees) arising from your misuse of the Apps, your violation of these Terms, your recording or processing of content without proper consent, or your infringement of any third-party rights.' },
    { id: 'termination', heading: '10. Termination', body: 'We may suspend or terminate your access to the Apps if you breach these Terms. You may stop using the Apps at any time by deleting them. Sections that by their nature should survive (including intellectual property, disclaimers, limitation of liability and indemnification) will remain in effect after termination.' },
    { id: 'governing-law', heading: '11. Governing Law & Disputes', body: 'These Terms are governed by the laws applicable to your jurisdiction of residence, without regard to conflict-of-law principles. Before initiating litigation, you agree to first contact us in good faith to resolve the dispute. Nothing in these Terms limits any statutory consumer rights you may have in your country of residence.' },
    { id: 'third-party', heading: '12. Third-Party Services', body: 'The Apps may interoperate with iOS features such as Files, AirPlay, Siri, and (for VoiceScribe) Google Calendar, Microsoft Outlook and WhisperKit on-device models. These are governed by their respective terms and privacy policies. We are not responsible for the practices of third-party services.' },
    { id: 'changes', heading: '13. Changes to These Terms', body: 'We may revise these Terms. The "Last updated" date above reflects the latest version. Continued use of the Apps after changes constitutes acceptance of the revised Terms.' },
    { id: 'contact', heading: '14. Contact Us', body: 'Questions about these Terms? Contact us at support@vmate.app or through the Contact Us page.' },
  ],
}

export const SUBSCRIPTION_TERMS: LegalDoc = {
  slug: 'purchase-and-subscription-terms',
  title: 'Purchase & Subscription Terms',
  lastUpdated: 'January 15, 2025',
  effective: 'January 15, 2025',
  intro:
    'These Purchase & Subscription Terms ("Purchase Terms") apply to any in-app purchases, subscriptions and paid features offered in our apps. They form part of our Terms & Conditions. Apple\'s App Store terms also apply to every transaction.',
  sections: [
    {
      id: 'overview',
      heading: '1. Overview of Paid Offerings',
      body: 'Our apps are free to download and use. We offer optional purchases to unlock premium features:',
      list: ['VMate Pro (one-time purchase or subscription) — unlocks the full 10-band equalizer, bass boost, hi-res audio output and live lyrics.', 'VoiceScribe Pro (subscription) — unlocks unlimited transcription length, AI summaries, AI chat, smart templates, multi-format export and more.'],
      subsections: [{ heading: 'Pricing', body: 'Prices are displayed in the app in your local currency and may vary by region. Applicable taxes are added where required by law. We may change pricing for new subscribers; existing subscriptions renew at the then-current rate unless cancelled.' }],
    },
    { id: 'billing', heading: '2. Billing & Payment', body: 'All payments are processed by Apple through your Apple ID. We never receive or store your payment card information. By confirming a purchase, you authorize Apple to charge the selected payment method.' },
    {
      id: 'auto-renewal',
      heading: '3. Subscription Auto-Renewal',
      body: 'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.',
      list: ['Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.', 'You can manage or cancel your subscription anytime in iPhone Settings → Apple ID → Subscriptions, or in the App Store app.', 'Turning off auto-renew at least 24 hours before the period ends prevents the next charge.', 'If you cancel, you keep Pro access until the end of the already-paid period.'],
    },
    { id: 'free-trial', heading: '4. Free Trials & Introductory Offers', body: 'If we offer a free trial or introductory price, it is available to new subscribers only. A free trial converts to a paid subscription at the end of the trial unless you cancel at least 24 hours before the trial ends. Starting a trial with Apple may require a payment method on file.' },
    { id: 'restoration', heading: '5. Restoration of Purchases', body: 'If you reinstall an app, switch devices, or restore your iPhone, tap "Restore Purchases" in the app\'s Settings. Your prior one-time purchases and active subscriptions are restored for free using your Apple ID, subject to Apple\'s Family Sharing and device limits.' },
    { id: 'family-sharing', heading: '6. Family Sharing', body: 'Where supported by Apple, certain Pro purchases may be shareable with your Family Sharing group. Subscription sharing depends on Apple\'s current Family Sharing policy for the relevant product.' },
    { id: 'refunds', heading: '7. Refunds', body: 'Because Apple processes all transactions, refund requests must be submitted to Apple. You can request a refund at reportaproblem.apple.com or by contacting Apple Support. We are unable to issue refunds directly. Statutory refund rights in your country of residence remain unaffected where applicable.' },
    { id: 'feature-changes', heading: '8. Changes to Paid Features', body: 'We may add, modify or remove premium features over time. Substantial reductions to the features included in your plan during an active paid period will be communicated in advance. We are not liable for changes to features made available by Apple or third-party iOS capabilities.' },
    { id: 'no-cash-value', heading: '9. No Cash Value & Non-Transferable', body: 'Purchases have no cash value, are non-transferable, and cannot be exchanged for cash. Selling, trading or sharing purchase receipts outside of Apple\'s approved mechanisms is prohibited and may result in loss of access.' },
    { id: 'compliance', heading: '10. Compliance with App Store Rules', body: 'All paid offerings comply with Apple\'s App Store Review Guidelines. Subscription lengths, pricing tiers and renewal disclosures meet Apple\'s requirements. In case of any conflict between these Purchase Terms and Apple\'s terms, Apple\'s terms prevail for the transaction itself.' },
    { id: 'contact', heading: '11. Contact Us', body: 'For billing or purchase questions, contact support@vmate.app or use the Contact Us page. For transaction or refund issues, please also contact Apple Support.' },
  ],
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_CONDITIONS,
  subscription: SUBSCRIPTION_TERMS,
}
