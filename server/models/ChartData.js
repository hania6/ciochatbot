let ChartData = new Map();

//Transform
ChartData.set("confirmation", [
    { name: 'Yes', value: 28 },
    { name: 'No', value: 72 }
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

//Technology
ChartData.set("tech", [
    { name: 'Mobile Technology', value: 66 },
    { name: 'Cloud Computing', value: 45 },
    { name: 'IOT', value: 38 },
    { name: 'Robotics Process Automation', value: 17 },
    { name: 'AI/Cognitive Computing', value: 66 },
    { name: 'Virtual Reality', value: 14 },
    { name: 'Augmented Reality', value: 13 },
    { name: 'Physical Robots', value: 13 },
    { name: '3D Printing', value: 10 },
    { name: 'Blockchain', value: 8 }
]);

module.exports = ChartData;
