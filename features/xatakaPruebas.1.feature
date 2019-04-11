Feature: Xataka web Testing (Examples)

    @XatakaSearch
    Scenario: Xataka website search
        Given I am on Xataka website
        When I click on Xataka Search button
        And I type "Android" at search input
        Then I confirm the search
        And the search count has to appear

    @GoVidaExtra
    Scenario: Ir a subweb Vidaextra
        Given Estoy en la web de Xataka
        When Hago click en el enlace href "//www.vidaextra.com?utm_source=xataka&utm_medium=network&utm_campaign=favicons"
        And El título de la web ha de ser "Vida Extra - Consolas y videojuegos: Playstation, XBox, Nintendo, PC"



