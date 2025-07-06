import { environment } from "../environments/environment";
const baseUrl = environment.apiUrl;

export const EXTERNAL_LINKS = {
    signup: `${baseUrl}/portal/signup`,
    login: `${baseUrl}/portal/home`,
    terms: `${baseUrl}/portal/platform-terms`,
    privacy: `${baseUrl}/portal/platform-privacy`,
    becomePartner: `${baseUrl}/become-partner`,
    contactUs: `${baseUrl}/portal/contact-us`,
    aws: 'https://aws.amazon.com/',
    amazon: 'https://www.amazon.com/',
    dpworld: 'https://www.dpworld.com/',
    creditsafe: 'https://www.creditsafe.com/',
    weavr: 'https://www.weavr.io/',
    facebook: 'https://www.facebook.com/tradebarriersbreakers',
    twitter: 'https://twitter.com/tuningbill',
    linkedin: 'https://in.linkedin.com/company/tuningbill-limited',
};
