function analyzeResume(text) {
    const keywords = {
        java: 10,
        aws: 10,
        docker: 10,
        sql: 10,
        project: 10,
        education: 10
    };

    let score = 0;
    let feedback = [];

    Object.keys(keywords).forEach(key => {
        if (text.toLowerCase().includes(key)) {
            score += keywords[key];
        } else {
            feedback.push(`Missing keyword: ${key}`);
        }
    });

    return {
        score,
        feedback
    };
}

module.exports = analyzeResume;