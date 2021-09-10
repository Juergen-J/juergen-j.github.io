// создание массива тегов
let word_list = [
    {text: "Java", weight: 13, link: "#skills"},
    {
        text: "JavaScript", weight: 10.5, html: {title: "My Title", "class": "custom-class"},
        link: {href: "#skills"}
    },
    {text: "Gradle", weight: 9.4},
    {text: "Maven", weight: 8},
    {text: "Spring Boot", weight: 6.2},
    {text: "Spring Web", weight: 6.2},
    {text: "JUnit", weight: 6.2},
    {text: "Spring Data (JPA Hibernate)", weight: 6.2},
    {text: "Spring MVC", weight: 7},
    {text: "Git", weight: 7},
    {text: "PostgresSQL", weight: 5},
    {text: "Jenkins", weight: 5},
    {text: "Docker", weight: 5},
    {text: "HTML", weight: 5},
    {text: "Mockito", weight: 5},
    {text: "CSS", weight: 5}
];
$(function () {
    $("#skills-cloud").jQCloud(word_list);
});