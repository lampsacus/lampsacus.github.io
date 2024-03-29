---
layout: default
---

<main>
<h4 id="la-fórmula-más-notable-en-matemáticas">La identidad de Euler: La fórmula más notable en matemáticas</h4>
<p>En una de sus famosas conferencias de Física, Richard Feynman le dedica una clase completa a &ldquo;una de las fórmulas más notables, casi asombrosas, de todas las matemáticas.&rdquo; Al comenzar, Feynman explica que &ldquo;desde el punto de vista del físico, podríamos presentar esta fórmula en dos minutos más o menos, y terminar con ella. Pero la ciencia es tanto para el disfrute intelectual como para la utilidad práctica, así que en lugar de dedicar unos minutos a esta asombrosa joya, rodearemos la joya con su engaste adecuado en el gran diseño de esa rama de las matemáticas que se llama álgebra elemental.&rdquo; Un poco antes de culminar, la llama además &ldquo;la fórmula más notable en matemáticas&rdquo;.</p>
<p>La formula a la que Feynman se refiere es la famosa fórmula de Euler que su autor Leonhard  Euler popularizó en el capítulo 8 del <em>Introductio in analysin infinitorum</em> o Introducción al análisis del infinito. Euler sentó las bases del análisis matemático con su <em>Introductio</em>, que se ha llegado a comparar con los <em>Elementos</em> de Euclides por su significado para las matemáticas. La fórmula, como nos dice Feynman, es la siguiente:</p>
<p style="text-align: center;">
e<sup>i&#952;</sup> = cos &#952; + i sen &#952;
</p>
<p>Contemplemos sus partes:</p>
<h2 id="el-número-e">El número <em>e</em></h2>
<p>El número <em>e</em> es un número irracional y trascendente. El valor de <em>e</em> reducido a sus primeras cifras decimales es el siguiente:
<em>e</em> = 2,71828182 &hellip; .Esta constante aparece en la computación de interés compuesto cada vez que se aplica un cambio extremadamente pequeño un número extremadamente grande de veces.</p>
<p>Como se sabe, la fórmula para computar el interés compuesto es la siguiente:</p>
<p>x = C(1+t/n)<sup>nu</sup> - C</p>
<p>dónde:</p>
<p>x = interés compuesto + capital.</p>
<p>C = capital (el monto del depósito inicial o del préstamo).</p>
<p>t = tasa de interés.</p>
<p>n = número de períodos de capitalización.</p>
<p>u = número de unidades de tiempo en que el dinero se invierte o se solicita en préstamo.</p>
<p>Así que si comenzamon con un capital de $1000 dólares, con una tasa de interés anual digamos de 100%, entonces:</p>
<p>x = C(1+t/n)<sup>nu</sup> - C</p>
<p>x = 1000 (1+1/1)<sup>(1)(1)</sup></p>
<p>x = 1000 (1+1/1)<sup>(1)</sup></p>
<p>x = 1000 (2)<sup>(1)</sup></p>
<p>x = 1000 (2)</p>
<p>x = 2000</p>
<p>En un año tendríamos en nuestro generoso banco $1000 de interés compuesto acumulado más el capital original, para un total de 2000 dólares.</p>
<p>Hagamos una tabla. Disminuyamos la tasa de interés anual a un % consecutivamente más ínfimo y dejemos el período de capitalización en su forma anual:</p>
<table>
<thead>
<tr>
<th>t</th>
<th>(1+t/n)<sup>(n)(u)</sup></th>
<th>x</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>(1+1/1)<sup>(1)(1)</sup></td>
<td>$2000</td>
</tr>
<tr>
<td>0.5</td>
<td>(1+.5/1)<sup>(1)(1)</sup></td>
<td>$1500</td>
</tr>
<tr>
<td>:</td>
<td>:</td>
<td>:</td>
</tr>
<tr>
<td>0.1</td>
<td>(1+.1/1)<sup>(1)(1)</sup></td>
<td>$1100</td>
</tr>
<tr>
<td>0.01</td>
<td>(1+.01/1)<sup>(1)(1)</sup></td>
<td>$1010</td>
</tr>
</tbody>
</table>
<p>Por supuesto sabemos que a medida que disminuye la tasa de interés anual, disminuye igualmente el monto de la ganancia. Que tal si dejamos la tasa de interés al 10% y cambiamos el número de períodos de capitalización, mensualmente, 12 veces al año:</p>
<table>
<thead>
<tr>
<th>t</th>
<th>(1+t/n)<sup>(n)(u)</sup></th>
<th>x</th>
</tr>
</thead>
<tbody>
<tr>
<td>0.1</td>
<td>(1+.1/12)<sup>(12)(1)</sup></td>
<td>1104.71</td>
</tr>
</tbody>
</table>
<p>Hagamos algo diferente. Esta vez cambiémos dos variables en vez de una. Disminuyamos paulativamente la tasa de interés mientras aumentamos el período de capitalización:</p>
<table>
<thead>
<tr>
<th>t</th>
<th>(1+t/n)<sup>(n)(u)</sup></th>
<th>x</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>(1+1/1)<sup>(1)(1)</sup></td>
<td>$2000</td>
</tr>
<tr>
<td>0.5</td>
<td>(1+.5/2)<sup>(2)(1)</sup></td>
<td>$1562.50</td>
</tr>
<tr>
<td>0.4</td>
<td>(1+.4/4)<sup>(4)(1)</td>
<td>$1464.10</td>
</tr>
<tr>
<td>0.3</td>
<td>(1+.3/6)<sup>(6)(1)</sup></td>
<td>$1322.50</td>
</tr>
<tr>
<td>0.2</td>
<td>(1+.2/12)<sup>(1)(1)</sup></td>
<td>$1219.31</td>
<p>Lo anterior lo hemos hecho para observar la funcionalidad de la fórmula para computar el interés compuesto.</p>
<p>Enfoquémonos ahora en la parte de la fórmula que nos ayuda a calcular la ganancia (1+1/n)<sup>nu</sup>. Dejemos que <em>y</em> en este caso sea la ganancia en forma decimal por la que multiplicaríamos nuestro capital e imaginémonos una cierta cantidad inmensa de veces que se realizaría la capitalización en un año con un interés anual de 100%. Extendamos los dígitos de <em><strong>y</strong></em> a 10 lugares solamente:</p>
<table>
<thead>
<tr>
<th>n</th>
<th>(1+t/n)<sup>(n)(u)</sup></th>
<th>y en decimal</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>(1+1/1)<sup>(1)(1)</sup></td>
<td>2,00000000</td>
</tr>
<tr>
<td>5</td>
<td>(1+1/5)<sup>(5)(1)</sup></td>
<td>2,48832000</td>
</tr>
<tr>
<td>10</td>
<td>(1+1/10)<sup>(10)(1)</sup></td>
<td>2,59374246601</td>
</tr>
<tr>
<td>100</td>
<td>(1+1/100)<sup>(100)(1)</sup></td>
<td>2,7048138294</td>
</tr>
<tr>
<td>1000</td>
<td>(1+1/1000)<sup>(1000)(1)</sup></td>
<td>2,7169239322</td>
</tr>
<tr>
<td>10000</td>
<td>(1+1/10000)<sup>(10000)(1)</sup></td>
<td>2,7181459268</td>
</tr>
<tr>
<td>100000</td>
<td>(1+1/100000)<sup>(100000)(1)</sup></td>
<td>2,7182682371</td>
</tr>
<tr>
<td>1000000</td>
<td>(1+1/10000000)<sup>(1000000)(1)</sup></td>
<td>2,7182804693</td>
</tr>
<tr>
<td>10000000</td>
<td>(1+1/100000000)<sup>(10000000)(1)</sup></td>
<td>2,7182816925</td>
</tr>
<tr>
<td>100000000</td>
<td>(1+1/1000000000)<sup>(100000000)(1)</sup></td>
<td>2,7182818149</td>
</tr>
<tr>
<td>1000000000</td>
<td>(1+1/1000000000)<sup>(1000000000)(1)</sup></td>
<td>2,7182818271</td>
</tr>
<tr>
<td>10000000000</td>
<td>(1+1/10000000000)<sup>(10000000000)(1)</sup></td>
<td>2,7182818283</td>
</tr>
</tbody>
</table>
<p>Si la capitalización ocurre diez mil millones de veces en un año a un interés de un 100% obtendríamos una ganancia equivalente al producto de nuestro capital y 2,7182818283.</p>
<p>Este número es una aproximación a <em><strong>e</strong></em>, el mismo que en nuestra fórmula inicial tan alabada por Feynman:</p>
<p style="text-align: center;">
e<sup>i&#952;</sup> = cos &#952; + i sen &#952;
</p>
<p>Por supuesto que este tipo de capitalización contínua no existe en la realidad, ya que la mayoría de los intereses se capitalizan diaria, semanal, mensual, trimestral, semestral o anualmente. Pero resulta interesante imaginarse o generalizar que sucedería si pudiéramos continuar de esta manera.</p>
<p>Pero el número <em><strong>e</strong></em> no solamente es interesante por estas propiedades.</p>
<p>Nótese que el número Euler es un número límite. No importa si capitalizamos <em>ad infinitum</em>, nunca avanzaríamos más que el producto de nuestro capital y este número prodigioso.</p>
<p><em><strong>e</strong></em>, el número de Euler, puede ser definido como:</p>
<p>El límite de (1+t/n)<sup>(n)(u)</sup> mientras n continúa al infinito.</p>
<div>\begin{align} e=\lim_{n\rightarrow\infty}\left( 1+\frac{1}{n}\right)^n\end{align}</div>
<p>El número <em><strong>e</strong></em> no fue inventado por Euler -se conocía desde antes- fue Euler sin embargo quien, por primera vez, usó la función exponencial en vez del logaritmo en su formulación de <em><strong>e</strong></em>. Esta constante <em><strong>e</strong></em> se usa por lo tanto como la base común para las tasas de crecimiento, por lo que juega un papel fundamental en la descripción y predicción de fenómenos naturales que varían exponencialmente con el tiempo, desde la inversión financiera pasando por la tasa de propagación de enfermedades hasta la desintegración radiactiva. Cuando n representa el tiempo, <em><strong>e</strong></em> significa una tasa de crecimiento (o disminución, para n negativo) que es igual al tamaño o cantidad que se ha acumulado hasta el momento.</p>
<p>Entonces, en ese sentido, el número <em><strong>e</strong></em> es fundamental en la física, la ingeniería y las ciencias económicas. <em><strong>e</strong></em> representa la idea de que todos los sistemas en continuo crecimiento son versiones escaladas de una tasa común.</p>
<h2 id="otras-definición-de-e-usando-factoriales">Otras definición de <em><strong>e</strong></em> usando factoriales</h2>
<div>\begin{align} e=\lim_{n\rightarrow\infty}\left( 1+\frac{1}{n}\right)^n=1+\frac{1}{1}+\frac{1}{1\cdot2}+\frac{1}{1\cdot3}+\frac{1}{1\cdot4}...\end{align}</div>
<p>Lo cual es lo mismo que:</p>
<div>\begin{align} e=\lim_{n\rightarrow\infty}\left( 1+\frac{1}{n}\right)^n=1+\frac{1}{1!}+\frac{1}{2!}+\frac{1}{3!}+\frac{1}{4!}...\end{align}</div>
<p>Ahora llegamos a otro número en la fórmula que, a diferencia de <em><strong>e</strong></em>, no existe en la realidad, lo cual no significa que no sea importante. Pero no nos detendremos en él, ni en los próximos, no más que para definirlos.</p>
<h2 id="la-unidad-de-número-imaginario-i">La unidad de número imaginario <em><strong>i</strong></em></h2>
<p>Pero, mientras hemos visto una aplicación de (1+t/n)<sup>(n)(u)</sup>, ¿de dónde sale <em><strong>i</strong></em>?</p>
<p>Sabemos que <em><strong>i</strong></em><sup>2</sup> = -1, lo cual quiere decir que,</p>
<p>La <em><strong>i</strong></em> es la unidad de número imaginario cuya definición es:</p>
<p><em><strong>i</strong></em><sup>2</sup> = -1</p>
<div> i = $\sqrt[]{-1}$ </div>
<h2 id="la-letra-952-theta-en-geometría-representa-un-ángulo-cualquiera">La letra θ (theta), en geometría, representa un ángulo cualquiera.</h2>
<p>Es como la <em><strong>x</strong></em> en álgebra que podemos sustituir por un número cualquiera.</p>
<h2 id="cos-y-sen"><em>cos</em> y <em>sen</em>&hellip;</h2>
<p>se refieren por supuesto a las funciones trigonométricas coseno y seno respectivamente.</p>
<p>En matemáticas, el seno y el coseno son funciones trigonométricas de un ángulo. El seno y el coseno de un ángulo agudo se definen en el contexto de un triángulo rectángulo: para el ángulo especificado, su seno es la relación entre la longitud del lado opuesto a ese ángulo y la longitud del lado más largo del triángulo (la hipotenusa), y el coseno es la razón de la longitud del cateto adyacente a la de la hipotenusa.</p>
<img src="/assets/images/Triangulo-Sen-Cos.svg" alt="Triángulo: Seno y Coseno" width="50%"/>
<p>Valdría la pena en este momento escribir con palabras lo que dice esta fórmula en castellano antes de proceder, para volver a apreciar en su conjunto la joya que es:</p>
<p>Dice:</p>
<p><em>El límite de (1+t/n)<sup>(n)(u)</sup> mientras n continúa al infinito elevado al poder del producto del número imaginario y un ángulo es igual a la suma del coseno del ángulo más el producto del número imaginario y el seno del ángulo.</em></p>
<p style="text-align: center;">
e<sup>i&#952;</sup> = cos &#952; + i sen &#952;
</p>
<p>¡Vaya ocurrencia! Y este no es el final.</p>
<p>Por alguna razón, que va más allá del alcance de este artículo, Euler decidió sustituir el valor del ángulo θ por π, otro número trascendental e irracional. Con ello extendió el reino de la trigonometría.</p>
<p>La palabra trigonometría proviene del griego τριγωνο trigōno o triángulo y μετρον metron o medida. ¿Pero que tal si aplicamos sus principios al círculo, como hizo Euler? A fin de cuentas, si nos fijamos en la siguiente figura podemos percibir la relación entre la geometría del círculo y la trigonometría. Adicionemos además coordenadas:</p>
<img src="/assets/images/Trigonometria.webp" alt="Triángulo y Círculo: Seno y Coseno" width="60%"/>
<p>El resultado, entonces, cuando θ = π:</p>
<p style="text-align: center;">
e<sup>i&#952;</sup> = cos &#952; + i sen &#952;
</p>
<p style="text-align: center;">
e<sup>i&#960;</sup> = cos &#960; + i sen &#960;
</p>
<h2 id="otra-definición-del-coseno-y-seno">Otra definición del coseno y seno.</h2>
<p>Dado un punto en el círculo unitario,
en contra del sentido de las agujas del reloj, desde el eje x positivo,
cos θ es la coordenada x del punto,
sen θ es la coordenada y del punto.</p>
<p>Entonces obtenemos la identidad de Euler a partir de la fórmula de Euler y enviando - 1 al lado derecho:</p>
<p style="text-align: center;">
e<sup>i&#960;</sup> = (-1) + (0)
</p>
<p style="text-align: center;">
e<sup>i&#960;</sup> = -1
</p>
<p style="text-align: center;">
e<sup>i&#960;</sup>+1 = 0
</p>
<p>Y esta es la famosa <strong>identidad de Euler</strong>. Que dice:</p>
<p><em>La constante Euler, elevada al poder del producto del número imaginario <strong>i</strong> y <strong>π</strong> más 1, es igual a 0.</em> Confluyen las constantes más importantes de las matemáticas: e, i, π, 1 y 0, al igual que varias ramas de esta como el álgebra, la trigonometría, la geometría y el cálculo. Extraordinaria joya, y como decía Feynman, la fórmula más notable de las matemáticas.</p>
<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$'], ['\[','\]']],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: { equationNumbers: { autoNumber: "AMS" },
         extensions: ["AMSmath.js", "AMSsymbols.js"] }
  }
});
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Queue(function() {
    // Fix <code> tags after MathJax finishes running. This is a
    // hack to overcome a shortcoming of Markdown. Discussion at
    // https://github.com/mojombo/jekyll/issues/199
    var all = MathJax.Hub.getAllJax(), i;
    for(i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
});
</script>
<style type="text/css">
    ol { list-style-type: lower-alpha; }
</style>
<style type="text/css">
code.has-jax {font: inherit;
              font-size: 100%;
              background: inherit;
              border: inherit;
              color: #515151;}
</style>
