var apis = {
		"lobs": "/lobs",
		"concepts": "/lobs/{lob}/concepts",
		"applications": "/concepts/{concept}/applications",
		"databases": "/concepts/{concept}/applications/{application}/databases",
		"schemas": "/concepts/{concept}/applications/{application}/databases/{database}/schemas",
		"tables": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables",
		"columns": "/concepts/{concept}/applications/{application}/databases/{database}/schemas/{schema}/tables/{table}/columns",
		"coverage": "/concepts/{concept}/coverage",
		"get-samples": "/samples",
		"recommended-concepts": "/columns/{column}/recommendedconcepts",
		"verify-concept": "/columns/{column}/recommendedconcepts/{concept}/verify",
		"list-concepts": "/concepts",
		"concept-details": "/concepts/{concept}",
		"curate-concept": "/concepts/{concept}/curate",
		"create-concept": "/concepts",
		"edit-concept": "/concepts/{concept}",
		"remove-concept": "/concepts/{concept}"
	};