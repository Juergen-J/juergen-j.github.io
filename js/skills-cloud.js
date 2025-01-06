// создание массива тегов
let word_list = [
    {text: "Java", weight: 13, link: "#skills"},
    {text: "JavaScript", weight: 10.5, link: "#skills"},
    {text: "TypeScript", weight: 10, link: "#skills"},
    {text: "Spring Boot", weight: 9.5, link: "#skills"},
    {text: "Spring MVC", weight: 9.3, link: "#skills"},
    {text: "Spring Data (JPA/Hibernate)", weight: 9, link: "#skills"},
    {text: "Angular", weight: 8.8, link: "#skills"},
    {text: "HTML", weight: 8.5, link: "#skills"},
    {text: "CSS", weight: 8.5, link: "#skills"},
    {text: "Docker", weight: 8, link: "#skills"},
    {text: "Git", weight: 7.8, link: "#skills"},
    {text: "PostgreSQL", weight: 7.5, link: "#skills"},
    {text: "MySQL", weight: 7.3, link: "#skills"},
    {text: "JUnit", weight: 7, link: "#skills"},
    {text: "Mockito", weight: 6.8, link: "#skills"},
    {text: "Gradle", weight: 6.5, link: "#skills"},
    {text: "Maven", weight: 6.3, link: "#skills"},
    {text: "AWS", weight: 6, link: "#skills"},
    {text: "Bootstrap", weight: 5.5, link: "#skills"}
];

$(function () {
    $("#skills-cloud").jQCloud(word_list);
});
