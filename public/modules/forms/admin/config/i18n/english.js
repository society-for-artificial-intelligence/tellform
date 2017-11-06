'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('en', {

		//Configure Form Tab View
		ADVANCED_SETTINGS: 'Advanced Settings',
		FORM_NAME: 'Your tellform is called',
		FORM_STATUS: 'Status',
		PUBLIC: 'Public',
		PRIVATE: 'Private',
		GA_TRACKING_CODE: 'Google Analytics Tracking Code',
		DISPLAY_FOOTER: 'Form Footer',
		SAVE_CHANGES: 'Save Changes',
		CANCEL: 'Cancel',
		DISPLAY_START_PAGE: 'Start Page',
		DISPLAY_END_PAGE: 'Custom End Page',
		GENERAL_TAB: 'General',
		SELF_NOTIFICATIONS_TAB: 'Self notifications',
		RESPONDENT_NOTIFICATIONS_TAB: 'Respondent notifications',

		SEND_NOTIFICATION_TO: 'Send to',
		NO_EMAIL_FIELD_WARNING: 'Error: You need an email field in your form to send the email to your form respondent',
		REPLY_TO: 'Reply to',
		EMAIL_SUBJECT: 'Subject',
		EMAIL_MESSAGE: 'Message',
		ENABLE_RESPONDENT_NOTIFICATIONS: 'Respondent Notifications are currently',
		ENABLE_SELF_NOTIFICATIONS: 'Self Notifications are currently',
		TOGGLE_ENABLED: 'Enabled',
		TOGGLE_DISABLED: 'Disabled',
		ADD_VARIABLE_BUTTON: 'Add variable',

		//List Forms View
		CREATE_A_NEW_FORM: 'Create a new form',
		CREATE_FORM: 'Create form',
		CREATED_ON: 'Created on',
		MY_FORMS: 'My forms',
		NAME: 'Name',
		LANGUAGE: 'Language',
		FORM_PAUSED: 'Form paused',

		//Edit Field Modal
		EDIT_FIELD: 'Edit this Field',
		SAVE_FIELD: 'Save',
		ON: 'ON',
		OFF: 'OFF',
		REQUIRED_FIELD: 'Required',
		LOGIC_JUMP: 'Logic Jump',
		SHOW_BUTTONS: 'Additional Buttons',
		SAVE_START_PAGE: 'Save',

		//Admin Form View
		ARE_YOU_SURE: 'Are you ABSOLUTELY sure?',
		READ_WARNING: 'Unexpected bad things will happen if you don’t read this!',
		DELETE_WARNING1: 'This action CANNOT be undone. This will permanently delete the "',
		DELETE_WARNING2: '" form and remove all associated form submissions.',
		DELETE_CONFIRM: 'Please type in the name of the form to confirm.',
		I_UNDERSTAND: 'I understand the consequences, delete this form.',
		DELETE_FORM_SM: 'Delete',
		DELETE_FORM_MD: 'Delete Form',
		DELETE: 'Delete',
		FORM: 'Form',
		VIEW_MY_TELLFORM: 'View my tellform',
		LIVE: 'Live',
		PREVIEW: 'Preview',
		COPY: 'Copy',
		COPY_AND_PASTE: 'Copy and Paste this to add your TellForm to your website',
		CHANGE_WIDTH_AND_HEIGHT: 'Change the width and height values to suit you best',
		POWERED_BY: 'Powered by',
		TELLFORM_URL: 'Your TellForm is permanently at this URL',

		//Edit Form View
		DISABLED: 'Disabled',
		YES: 'YES',
		NO: 'NO',
		ADD_LOGIC_JUMP: 'Add Logic Jump',
		ADD_FIELD_LG: 'Click to Add New Field',
		ADD_FIELD_MD: 'Add New Field',
		ADD_FIELD_SM: 'Add Field',
		EDIT_START_PAGE: 'Edit Start Page',
		EDIT_END_PAGE: 'Edit End Page',
		WELCOME_SCREEN: 'Start Page',
		END_SCREEN: 'End Page',
		INTRO_TITLE: 'Title',
		INTRO_PARAGRAPH: 'Paragraph',
		INTRO_BTN: 'Start Button',
		TITLE: 'Title',
		PARAGRAPH: 'Paragraph',
		BTN_TEXT: 'Go Back Button',
		BUTTONS: 'Buttons',
		BUTTON_TEXT: 'Text',
		BUTTON_LINK: 'Link',
		ADD_BUTTON: 'Add Button',
		PREVIEW_FIELD: 'Preview Question',
		QUESTION_TITLE: 'Title',
		QUESTION_DESCRIPTION: 'Description',
		OPTIONS: 'Options',
		ADD_OPTION: 'Add Option',
		NUM_OF_STEPS: 'Number of Steps',
		CLICK_FIELDS_FOOTER: 'Click on fields to add them here',
		SHAPE: 'Shape',
		IF_THIS_FIELD: 'If this field',
		IS_EQUAL_TO: 'is equal to',
		IS_NOT_EQUAL_TO: 'is not equal to',
		IS_GREATER_THAN: 'is greater than',
		IS_GREATER_OR_EQUAL_THAN: 'is greater or equal than',
		IS_SMALLER_THAN: 'is smaller than',
		IS_SMALLER_OR_EQUAL_THAN: 'is smaller or equal than',
		CONTAINS: 'contains',
		DOES_NOT_CONTAINS: 'does not contain',
		ENDS_WITH: 'ends with',
		DOES_NOT_END_WITH: 'does not end with',
		STARTS_WITH: 'starts with',
		DOES_NOT_START_WITH: 'does not start with',
		THEN_JUMP_TO: 'then jump to',

		//Edit Submissions View
		TOTAL_VIEWS: 'total unique visits',
		RESPONSES: 'responses',
		COMPLETION_RATE: 'completion rate',
		AVERAGE_TIME_TO_COMPLETE: 'avg. completion time',

		DESKTOP_AND_LAPTOP: 'Desktops',
		TABLETS: 'Tablets',
		PHONES: 'Phones',
		OTHER: 'Other',
		UNIQUE_VISITS: 'Unique Visits',

		FIELD_TITLE: 'Field Title',
		FIELD_VIEWS: 'Field Views',
		FIELD_DROPOFF: 'Field Completion',
		FIELD_RESPONSES: 'Field Responses',
		DELETE_SELECTED: 'Delete Selected',
		EXPORT_TO_EXCEL: 'Export to Excel',
		EXPORT_TO_CSV: 'Export to CSV',
		EXPORT_TO_JSON: 'Export to JSON',
		PERCENTAGE_COMPLETE: 'Percentage Complete',
		TIME_ELAPSED: 'Time Elapsed',
		DEVICE: 'Device',
		LOCATION: 'Location',
		IP_ADDRESS: 'IP Address',
		DATE_SUBMITTED: 'Date Submitted',

		//Design View
		BACKGROUND_COLOR: 'Background Color',
		DESIGN_HEADER: 'Change how your Form Looks',
		QUESTION_TEXT_COLOR: 'Question Text Color',
		ANSWER_TEXT_COLOR: 'Answer Text Color',
		BTN_BACKGROUND_COLOR: 'Button Background Color',
		BTN_TEXT_COLOR: 'Button Text Color',

	    //Share View
	    EMBED_YOUR_FORM: 'Embed your form',
	    SHARE_YOUR_FORM: 'Share your form',

		//Admin Tabs
		CREATE_TAB: 'Create',
		DESIGN_TAB: 'Design',
		CONFIGURE_TAB: 'Configure',
		ANALYZE_TAB: 'Analyze',
    	SHARE_TAB: 'Share',

	    //Field Types
	    SHORT_TEXT: 'Short Text',
	    EMAIL: 'Email',
	    MULTIPLE_CHOICE: 'Multiple Choice',
	    DROPDOWN: 'Dropdown',
	    DATE: 'Date',
	    PARAGRAPH_FIELD: 'Paragraph',
	    YES_NO: 'Yes/No',
	    LEGAL: 'Legal',
	    RATING: 'Rating',
	    NUMBERS: 'Numbers',
	    SIGNATURE: 'Signature',
	    FILE_UPLOAD: 'File upload',
	    OPTION_SCALE: 'Option Scale',
	    PAYMENT: 'Payment',
	    STATEMENT: 'Statement',
	    LINK: 'Link',

	    //Form Preview
	    FORM_SUCCESS: 'Form entry successfully submitted!',
		REVIEW: 'Review',
	    BACK_TO_FORM: 'Go back to Form',
		EDIT_FORM: 'Edit this TellForm',
		ADVANCEMENT: '{{done}} out of {{total}} answered',
		CONTINUE_FORM: 'Continue to Form',
		REQUIRED: 'required',
		COMPLETING_NEEDED: '{{answers_not_completed}} answer(s) need completing',
		OPTIONAL: 'optional',
		ERROR_EMAIL_INVALID: 'Please enter a valid email address',
		ERROR_NOT_A_NUMBER: 'Please enter valid numbers only',
		ERROR_URL_INVALID: 'Please a valid url',
		OK: 'OK',
		ENTER: 'press ENTER',
		NEWLINE: 'press SHIFT+ENTER to create a newline',
		CONTINUE: 'Continue',
		LEGAL_ACCEPT: 'I accept',
		LEGAL_NO_ACCEPT: 'I don’t accept',
		SUBMIT: 'Submit',
		UPLOAD_FILE: 'Upload your File'
	});
}]);
