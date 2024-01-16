<template>
  <div class="content">
    <div class="img"><img src="@/assets/HE.jpg" alt="Hjalmar Eckerlund" /></div>

    <div class="text">
      <h1>Historia</h1>
      <p>
        Året var 1924 då den unge Hjalmar Eckerlund startade ett litet skrädderi i Tomelilla vid
        kvarteret Spruthusgränd. Han höll till i en liten lokal där han började sin verksamhet
        endast 24 år gammal, efter utbildning hos en skräddarmästare.
      </p>
      <p>
        Efter att ha provat efterfrågan på sitt yrke, flyttade han efter några år hela skrädderiet
        till Norregatan 3, där han sysselsatte ytterligare 4 skräddare. Stora kvantiteter kläder
        syddes och snart såldes även färdig herrkonfektion. Efterfrågan var stor, så på 40 talet
        utökades sortimentet även med färdigsydda damkläder.
      </p>
      <p>
        1937 köptes posthuset på Malmövägen in, där vår nuvarande butik finns. Posthuset fick sitt
        namn eftersom posten inhystes här fram till 1949. Lokalerna fick sedan ett helt nytt ansikte
        och inreddes till en modern klädbutik. Resultatet blev en komplett butik med en välsorterad
        herravdelning på bottenplan och en lika välfylld damavdelning en trappa upp.
      </p>
      <p>
        Nästan 30 år senare, 1977, fick affären ett rejält lyft. En utbyggnad på hela 500
        kvadratmeter i bottenplan gjorde det möjligt att ha samtliga kläder på en och samma våning,
        Det blev då 3 avdelningar. En dam och herr, samt en för jeans. Dessa tre enheter smälte
        naturligt samman, vilket har varit till stor glädje både för personalen, då miljön är mer
        lättarbetad, och för kunden som får god överskådlig blick av det stora utbudet kläder som
        ryms på totalt 700 kvadratmeter.
      </p>
      <p>
        Vid Hjalmar Eckerlunds bortgång 1954 tog hans son Stig Eckerlund över ansvaret för firman
        tillsammans med hustrun Ulla. Därefter tog sönerna Göran och Anders över butiken men Stig
        och Ulla jobbade kvar fram till 2012.
      </p>
      <p>
        2014 i mars månad var det 90 års jubileum. Bara ett par veckor innan hade Stig lämnat oss.
        Vi höll 90 års jubileum till hans ära och hyllade honom för allt han gjort för butiken.
      </p>
      <p>
        Idag är vi 25 anställda i butiken, varav vi har 2 ändringssömmerskor som ändrar efter
        önskemål. Butiken drivs idag av Göran och Anders tillsammans med Görans ena son Pontus, samt
        även Anders fru Gunnel och deras 2 döttrar Frida och Sofia.
      </p>
    </div>
  </div>
</template>
<script></script>

<style scoped>
/* Common styles for all screen sizes */
h1 {
  color: #e8be8c;
}

.content {
  color: #e8be8c;
  margin: 5% 0 2% 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.img {
  margin: 0; /* Adjust margin for mobile */
}

.img img {
  width: 100%; /* Make the image take 100% of the container width */
  height: auto;
  max-width: 100%;
}

.text {
  margin-top: 5%;
  text-align: start;
  font-size: 12px;
  color: black;
  max-width: 100%;
}

.text p {
  margin-top: 2%;
}

/* Media queries for larger screens */
@media (min-width: 768px) {
  .content {
    grid-template-columns: auto 1fr;
  }

  .img {
    margin: 35% 0 0 20%;
  }

  .text {
    margin-right: 25%;
  }
}
</style>
