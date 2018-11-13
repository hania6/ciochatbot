let ChartData = new Map();

//Transform
ChartData.set("transform_confirmation", [
    { name: 'YES', value: 28 },
    { name: 'NO', value: 72 }
]);

//Innovate
ChartData.set("innovation", [
    { name: 'Internally', value: 42 },
    { name: 'Externally', value: 48 },
    { name: 'None', value: 10 }
]);

//Organization
ChartData.set("org_type", [
    { name: 'Reinventor', value: 23 },
    { name: 'Practitioner', value: 41 },
    { name: 'Aspirational', value: 37 }
]);

//Role
ChartData.set("role", [
    { name: 'Technology Visionaries', value: 24 },
    { name: 'Transformation Business Leaders', value: 21 },
    { name: 'IT Coordinator', value: 13 },
    { name: 'Trusted Business Advisor', value: 12 }
]);

//Impact
ChartData.set("impact", [

    { name: 'Technology', value: 50 },
    { name: 'Market changes', value: 14 },
    { name: 'Inside the organization', value: 5 },
    { name: 'Competition', value: 31 }
]);

//Priorities
ChartData.set("priorities", [

    { name: 'Innovate for competitive advantage', value: 50 },
    { name: 'Meeting business needs', value: 9 },
    { name: 'Optimizing investments', value: 57 },
    { name: 'Building better digital experience', value: 12 }
]);

//Barriers
ChartData.set("barriers", [
    { name: 'Lack of skills', value: 15 },
    { name: 'Cyber security threats', value: 23 },
    { name: 'Culture and people', value: 8 },
    { name: 'IT budgets', value: 54 }
]);

module.exports = ChartData;
