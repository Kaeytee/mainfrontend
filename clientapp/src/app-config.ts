// Centralized app and legal document configuration

export const LEGAL_EFFECTIVE_DATE = "15 May 2025";

export const DUMMY_USER = {
	id: "user-001",
	firstName: "Austin",
	lastName: "Doe",
	fullName: "Austin Bediako",
	email: "john.doe@example.com",
	phone: "+1 (555) 123-4567",
	address: "2000 Global Trade Plaza, Wilmington, DE 19801, United States",
	city: "Wilmington",
	state: "Delaware",
	zip: "19801",
	country: "United States",
	role: "user"
};

export const USER_NAME = DUMMY_USER.firstName;

export const LEGAL_COMPANY_NAME = "LogisticsFuture Inc.";
export const LEGAL_COMPANY_ADDRESS = [
	"2000 Global Trade Plaza",
	"Wilmington, DE 19801",
	"United States"
];
export const LEGAL_EMAIL = "legal@logisticsfuture.com";
export const LEGAL_DPO_EMAIL = "dpo@logisticsfuture.com";
export const LEGAL_GOVERNING_LAW = "State of Delaware, United States";

// URLs for legal documents
export const LEGAL_PRIVACY_POLICY_URL = "https://logisticsfuture.com/privacy-policy";
export const LEGAL_TERMS_OF_SERVICE_URL = "https://logisticsfuture.com/terms-of-service";
export const LEGAL_COOKIES_POLICY_URL = "https://logisticsfuture.com/cookies-policy";

// Cookies policy specific information
export const LEGAL_COOKIES_POLICY_EFFECTIVE_DATE = "15 May 2025";
export const LEGAL_COOKIES_POLICY_VERSION = "1.0";
export const LEGAL_COOKIES_POLICY_LAST_UPDATED = "15 May 2025";
export const LEGAL_COOKIES_POLICY_DESCRIPTION = "This Cookies Policy explains how we use cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this policy.";