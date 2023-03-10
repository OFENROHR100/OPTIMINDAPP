import './App.css';
import './Shop.css';
import Header from '../components/header'

function Shop() {
    function addToCart(event) {
        var main = event.currentTarget;
        let inputQty = main.parentNode.getElementsByClassName('primary_input')[0].value;
        main.parentNode.getElementsByClassName('primary_input')[0].value = '';
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        let itemFound = false;
        if (cartItems) {
            for (let item of cartItems) {
                if (item.itemId === main.parentNode.getAttribute('data-id')) {
                    item.quantity = inputQty ? item.quantity + parseInt(inputQty) : item.quantity + 1;
                    itemFound = true;
                }
            }
            if (!itemFound) {
                localStorage.setItem('cart', JSON.stringify([
                    ...cartItems,
                    {
                        itemId: main.parentNode.getAttribute('data-id'),
                        itemName: main.parentNode.getAttribute('data-name'),
                        price: main.parentNode.getAttribute('data-price'),
                        quantity: inputQty ? parseInt(inputQty) : 1
                    }
                ]))
            }
            else {
                localStorage.setItem('cart', JSON.stringify([
                    ...cartItems
                ]))
            }
            itemFound = false;
        }
        else {
            localStorage.setItem('cart', JSON.stringify([
                {
                    itemId: main.parentNode.getAttribute('data-id'),
                    itemName: main.parentNode.getAttribute('data-name'),
                    price: main.parentNode.getAttribute('data-price'),
                    quantity: inputQty ? parseInt(inputQty) : 1
                }
            ]))
        }
    }

  return (
    <div className="Shop">
      <Header></Header>
      <div className="ProductSection">
        <h1 className="text-align-center m-y-30">Unsere Produkte</h1>
        <h3 className="catagory">Br??tchen</h3>
        <h1 className="text-align-center" style={{display: "none"}} id="no_product_available">Es sind noch keine Produkte vorhanden!</h1>
        <section id="products_section" className="products_section">
        <div className="product-card" data-name="??hrenspitz" data-price="0.75" data-id="0">
            <div>
                <img src="./images/Geb??cke/??hrenspitz.webp" alt="FRUIT"/>
            </div>
            <h3>
                ??hrenspitz
            </h3>
            <p className="text-align-center">
                Wie der Name schon sagt: Einsame Spitze.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Bauernbr??tchen" data-price="0.60" data-id="1">
            <div>
                <img src="./images/Geb??cke/Bauernbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Bauernbr??tchen
            </h3>
            <p className="text-align-center">
                F??r Bauern und alle anderen ein Klassiker
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,60???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="D??nisches Sesambr??tchen" data-price="1.05" data-id="2">
        
            <div>
                <img src="./images/Geb??cke/D??nisches Sesambr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                D??nisches Sesambr??tchen
            </h3>
            <p className="text-align-center">
                Frisch aus D??nemark, ??h L??beck!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,05???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="D??nischer Wei??ermohn" data-price="1.05" data-id="3">
            <div>
                <img src="./images/Geb??cke/D??nischer Wei??ermohn.webp" alt="FRUIT"/>
            </div>
            <h3>
                D??nischer Wei??ermohn
            </h3>
            <p className="text-align-center">
                Den Mohn gibt???s auch in wei??? Ja, klar!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,05???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Dinkelbr??tchen" data-price="0.75" data-id="4">
            <div>
                <img src="./images/Geb??cke/Dinkelbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Dinkelbr??tchen
            </h3>
            <p className="text-align-center">
                100% Dinkel, 100% lecker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Fitty" data-price="0.75" data-id="5">
            <div>
                <img src="./images/Geb??cke/Fitty.webp" alt="FRUIT"/>
            </div>
            <h3>
                Fitty
            </h3>
            <p className="text-align-center">
                Empfehlung von uns, h??lt fit!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="H??rnchen" data-price="0.82" data-id="7">
            <div>
                <img src="./images/Geb??cke/H??rnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                H??rnchen
            </h3>
            <p className="text-align-center">
                Ein H??rnchen? Nehmen sie lieber noch eins!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Kartoffelroggenbr??tchen" data-price="0.75" data-id="8">
            <div>
                <img src="./images/Geb??cke/Kartoffelroggenbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kartoffelroggenbr??tchen
            </h3>
            <p className="text-align-center">
                Kartoffel im Br??tchen? Ja und es schmeckt auch noch.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="K??sebr??tchen" data-price="1" data-id="9">
            <div>
                <img src="./images/Geb??cke/K??sebr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                K??sebr??tchen
            </h3>
            <p className="text-align-center">
                K??se und Br??tchen, das ist das Rezept f??r das perfekte Br??tchen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Baguettebr??tchen" data-price="1" data-id="10">
            <div>
                <img src="./images/Geb??cke/Baguettebr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Baguettebr??tchen
            </h3>
            <p className="text-align-center">
                Ein sehr kleines Baguette, das gibt es auch in gro??.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Kornknacker" data-price="0.75" data-id="11">
            <div>
                <img src="./images/Geb??cke/Kornknacker.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kornknacker
            </h3>
            <p className="text-align-center">
                Unsere Empfehlung, schmeckt einfach gut.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>


        <div className="product-card" data-name="K??mmelring" data-price="0.83" data-id="12">
            <div>
                <img src="./images/Geb??cke/K??mmelring.webp" alt="FRUIT"/>
            </div>
            <h3>
                K??mmelring
            </h3>
            <p className="text-align-center">
                Ein Muss f??r jeden K??mmelliebhaber.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,83???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="K??mmelstange" data-price="0.83" data-id="13">
            <div>
                <img src="./images/Geb??cke/K??mmelstange.webp" alt="FRUIT"/>
            </div>
            <h3>
                K??mmelstange
            </h3>
            <p className="text-align-center">
                Ein Muss f??r jeden K??mmelliebhaber.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,83???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="K??rbiskernbr??tchen" data-price="0.75" data-id="14">
            <div>
                <img src="./images/Geb??cke/K??rbiskernbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                K??rbiskernbr??tchen
            </h3>
            <p className="text-align-center">
                Gro??e Kerne mit gro??artigem Geschmack.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Sonnenblumenkernbr??tchen" data-price="0.75" data-id="15">
            <div>
                <img src="./images/Geb??cke/Sonnenblumkernbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sonnenblumenkernbr??tchen
            </h3>
            <p className="text-align-center">
                Das Br??tchen ist nicht nur ein Augenschmaus.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Laugenbr??tchen" data-price="1.10" data-id="16">
            <div>
                <img src="./images/Geb??cke/Laugenbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenbr??tchen
            </h3>
            <p className="text-align-center">
                Das klassische Laugenbr??tchen zum Genie??en.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,10???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Laugencroissant" data-price="1.30" data-id="17">
            <div>
                <img src="./images/Geb??cke/Laugencroissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugencroissant
            </h3>
            <p className="text-align-center">
                Ein Laugencroissant zum reinbei??en, was auch sonst.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Laugenstange" data-price="1.25" data-id="18">
            <div>
                <img src="./images/Geb??cke/Laugenstange.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenstange
            </h3>
            <p className="text-align-center">
                Empfehlung von uns, beliebt bei jedermann.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,25???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

         <div className="product-card" data-name="Laugenstange mit K??rnern" data-price="1.30" data-id="19">
            <div>
                <img src="./images/Geb??cke/Laugenstange mit K??rnern.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenstange mit K??rnern
            </h3>
            <p className="text-align-center">
                Eine Laugenstange mit leckeren K??rnern.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

         <div className="product-card" data-name="Mittagsbr??tchen" data-price="0.50" data-id="20">
            <div>
                <img src="./images/Geb??cke/Mittagsbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mittagsbr??tchen
            </h3>
            <p className="text-align-center">
                Zum Fr??hst??ck und zum Mittag, aber eigentlich auch zum Abendbrot gut.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,50???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

        <div className="product-card" data-name="Mohnh??rnchen" data-price="0.82" data-id="22">
            <div>
                <img src="./images/Geb??cke/Mohnh??rnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnh??rnchen
            </h3>
            <p className="text-align-center">
                Schmeckt noch besser als es aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>

       <div className="product-card" data-name="Mohnbr??tchen" data-price="0.58" data-id="23">
            <div>
                <img src="./images/Geb??cke/Mohnbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnbr??tchen
            </h3>
            <p className="text-align-center">
                Tipp von den SemmelBrothers. Mit Honig schmeckt es noch besser.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,58???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>


        <div className="product-card" data-name="Pikanter Softie" data-price="0.90" data-id="24">
            <div>
                <img src="./images/Geb??cke/Pikantersoftie.webp" alt="FRUIT"/>
            </div>
            <h3>
                Pikanter Softie
            </h3>
            <p className="text-align-center">
                Pikant und f??r jedes Fr??hst??ck unersetzlich.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,90???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Roggenbr??tchen" data-price="0.63" data-id="25">
            <div>
                <img src="./images/Geb??cke/Roggenbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Roggenbr??tchen
            </h3>
            <p className="text-align-center">
                Einfach ein Roggenbr??tchen ohne viel Schnickschnack
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,63???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        
        <div className="product-card" data-name="Rosinenbr??tchen" data-price="0.95" data-id="26">
            <div>
                <img src="./images/Geb??cke/Rosinenbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenbr??tchen
            </h3>
            <p className="text-align-center">
                Ein s????es Milchbr??tchen mit Rosinen, das ist das Geheimnis.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,95???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Schnittbr??tchen" data-price="0.43" data-id="27">
            <div>
                <img src="./images/Geb??cke/Schnittbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schnittbr??tchen
            </h3>
            <p className="text-align-center">
                Der Klassiker f??r jeden Anwendungsfall.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,43???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        
        <div className="product-card" data-name="Schrotling" data-price="0.75" data-id="28">
            <div>
                <img src="./images/Geb??cke/Schrotling.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schrotling
            </h3>
            <p className="text-align-center">
                Ein Br??tchen wie kein zweites.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        
        <div className="product-card" data-name="Sesamh??rnchen" data-price="0.82" data-id="29">
            <div>
                <img src="./images/Geb??cke/Sesamh??rnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sesamh??rnchen
            </h3>
            <p className="text-align-center">
                Ein Post-Sesamh??rnchen aus der Ferne ruft nach dir.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        
        <div className="product-card" data-name="Sesambr??tchen" data-price="0.58" data-id="30">
            <div>
                <img src="./images/Geb??cke/Sesambr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sesambr??tchen
            </h3>
            <p className="text-align-center">
                Ein Br??tchen so gut wie jedes andere, aber mit Sesam!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,58???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div id="cef"><h3 className="catagory">Croissant</h3></div>
        
        <div className="product-card" data-name="Croissant" data-price="1.30" data-id="31">
            <div>
                <img src="./images/Geb??cke/Croissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                Croissant
            </h3>
            <p className="text-align-center">
                Ein kleines St??ck Frankreich f??r Zuhause.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="K??secroissant" data-price="1.70" data-id="32">
            <div>
                <img src="./images/Geb??cke/K??secroissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                K??secroissant
            </h3>
            <p className="text-align-center">
                Ein Croissant mit K??se, was braucht man dann denn noch?
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Schokocroissant" data-price="1.60" data-id="33">
            <div>
                <img src="./images/Geb??cke/Schokocroissants.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schokocroissant
            </h3>
            <p className="text-align-center">
                Ein Croissant veredelt mit Schokolade.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,60???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div id="cef"><h3 className="catagory">S????waren</h3></div>
        
        <div className="product-card" data-name="Apfelecke" data-price="1.95" data-id="34">
            <div>
                <img src="./images/Geb??cke/Apfelecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Apfelecke
            </h3>
            <p className="text-align-center">
                Eine Ecke mit einem Apfel??? oder?
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,95???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="gedeckter Apfelkuchen" data-price="1.85" data-id="35">
            <div>
                <img src="./images/Geb??cke/gedeckter Apfelkuchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                gedeckter Apfelkuchen
            </h3>
            <p className="text-align-center">
                Schmeckt noch leckerer als es aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,85???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Eisenbahnschiene" data-price="1.70" data-id="36">
            <div>
                <img src="./images/Geb??cke/Bahnschienen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Bahnschienen
            </h3>
            <p className="text-align-center">
                Zum Gl??ck sind diese hier nicht aus Eisen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Kirschkopenhagener" data-price="3.50" data-id="37">
            <div>
                <img src="./images/Geb??cke/Kirschkopenhagener.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kirschkopenhagener
            </h3>
            <p className="text-align-center">
                Aus L??beck sogar noch leckerer als aus Kopenhagen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,50???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Hanseaten Herz" data-price="1.40" data-id="38">
            <div>
                <img src="./images/Geb??cke/Hanseaten Herz.webp" alt="FRUIT"/>
            </div>
            <h3>
                Hanseaten Herz
            </h3>
            <p className="text-align-center">
                Ein Herz aus Gold, oder Zucker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,40???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Hanseaten Taler" data-price="1.20" data-id="39">
            <div>
                <img src="./images/Geb??cke/Hanseaten Taler.webp" alt="FRUIT"/>
            </div>
            <h3>
                Hanseaten Taler
            </h3>
            <p className="text-align-center">
                Ist mehr wert als sein Kaufpreis.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,20???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Himbeer Muffin" data-price="1.65" data-id="40">
            <div>
                <img src="./images/Geb??cke/Himbeer Muffin.webp" alt="FRUIT"/>
            </div>
            <h3>
                Himbeer Muffin
            </h3>
            <p className="text-align-center">
                Die Puderzuckerkrone sagt doch eigentlich alles.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,65???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Kirschecke" data-price="1.95" data-id="41">
            <div>
                <img src="./images/Geb??cke/Kirschecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kirschecke
            </h3>
            <p className="text-align-center">
                F??r die S????en unter uns die perfekte Wahl.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,95???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Schr??gst??ck" data-price="1.70" data-id="42">
            <div>
                <img src="./images/Geb??cke/Schr??gst??ck.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schr??gst??ck
            </h3>
            <p className="text-align-center">
                Ein St??ck reicht v??llig aus, um sie vom Hocker zu hauen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Mandelh??rnchen" data-price="2.10" data-id="43">
            <div>
                <img src="./images/Geb??cke/Mandelh??rnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mandelh??rnchen
            </h3>
            <p className="text-align-center">
                Aus L??beck und Marzipan? Das kann nur gut werden.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,10???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Milchmaus" data-price="1.20" data-id="44">
            <div>
                <img src="./images/Geb??cke/Milchmaus.webp" alt="FRUIT"/>
            </div>
            <h3>
                Milchmaus
            </h3>
            <p className="text-align-center">
                Sie schmeckt so s????, wie sie aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,20???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Milchbr??tchen" data-price="0.90" data-id="45">
            <div>
                <img src="./images/Geb??cke/Milchbr??tchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Milchbr??tchen
            </h3>
            <p className="text-align-center">
                Das klassische Milchbr??tchen
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,90???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Mohnschnitte" data-price="1.70" data-id="46">
            <div>
                <img src="./images/Geb??cke/Mohnschnitte.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnschnitte
            </h3>
            <p className="text-align-center">
                Ein Genuss f??r Gro?? und Klein
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Ochsenauge" data-price="1.50" data-id="47">
            <div>
                <img src="./images/Geb??cke/Ochsenauge.webp" alt="FRUIT"/>
            </div>
            <h3>
                Ochsenauge
            </h3>
            <p className="text-align-center">
                Ein Blickfang f??r jedes Auge.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,50???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Puddingbrezel" data-price="1.70" data-id="48">
            <div>
                <img src="./images/Geb??cke/Puddingbrezel.webp" alt="FRUIT"/>
            </div>
            <h3>
                Puddingbrezel
            </h3>
            <p className="text-align-center">
                Eine Brezel der anderen Art.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Rosinenschnecke" data-price="1.70" data-id="49">
            <div>
                <img src="./images/Geb??cke/Rosinenschnecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenschnecke
            </h3>
            <p className="text-align-center">
                Eine der s????esten Schnecken, die ihnen begegnen wird.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Schokomuffin" data-price="1.65" data-id="50">
            <div>
                <img src="./images/Geb??cke/Schokomuffin.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schokomuffin
            </h3>
            <p className="text-align-center">
                Ein purer Schokogenuss f??r den Gaumen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,65???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Schweineohr" data-price="1.70" data-id="51">
            <div>
                <img src="./images/Geb??cke/Schweineohr.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schweineohr
            </h3>
            <p className="text-align-center">
               Nicht aus Fleisch, aber daf??r guter Geschmack garantiert.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Mohnschnecke" data-price="1.70" data-id="52">
            <div>
                <img src="./images/Geb??cke/Mohnschnecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnschnecke
            </h3>
            <p className="text-align-center">
               Eine sehr s????e Schnecke, ohne Debatte.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        <div className="product-card" data-name="Zitronenscheibe" data-price="2.00" data-id="53">
            <div>
                <img src="./images/Geb??cke/Zitronenscheibe.webp" alt="FRUIT"/>
            </div>
            <h3>
                Zitronenscheibe
            </h3>
            <p className="text-align-center">
               Der Lieblingskuchen der SemmelBrothers
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,00???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Rumschnitte" data-price="1.60" data-id="54">
            <div>
                <img src="./images/Geb??cke/Rumschnitte.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rumschnitte
            </h3>
            <p className="text-align-center">
               Eine hei??e Schnitte f??r Erwachsene.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,60???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        
         <div id="cef"><h3 className="catagory">Brot</h3></div>
         
         <div className="product-card" data-name="Feinbrot" data-price="3.50" data-id="55">
            <div>
                <img src="./images/Geb??cke/Feinbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Feinbrot
            </h3>
            <p className="text-align-center">
               500 Gramm Genuss in jedem Laib.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,50???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Holsteiner Landbrot" data-price="3.40" data-id="56">
            <div>
                <img src="./images/Geb??cke/Holsteiner Landbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Holsteiner Landbrot
            </h3>
            <p className="text-align-center">
               Das Brot aus der Heimat.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,40???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Kartoffelkruste" data-price="3.70" data-id="57">
            <div>
                <img src="./images/Geb??cke/Kartoffelkruste.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kartoffelkruste
            </h3>
            <p className="text-align-center">
               So eine Kruste sieht man kein 2. Mal.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Kosakenbrot" data-price="3.40" data-id="58">
            <div>
                <img src="./images/Geb??cke/Kosakenbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kosakenbrot
            </h3>
            <p className="text-align-center">
               Ein Klassiker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,40???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Mohnzopf" data-price="3.60" data-id="59">
            <div>
                <img src="./images/Geb??cke/Mohnzopf.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnzopf
            </h3>
            <p className="text-align-center">
               Ein Muss auf jedem Fr??hst??ckstisch.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,60???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
         <div className="product-card" data-name="Rosinenstute" data-price="3.70" data-id="60">
            <div>
                <img src="./images/Geb??cke/Rosinenstute.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenstute
            </h3>
            <p className="text-align-center">
               Die sch??nsten Stuten unseres B??ckers.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,70???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Schweizer Landbrot" data-price="3.30" data-id="61">
            <div>
                <img src="./images/Geb??cke/Schweizer Landbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schweizer Landbrot
            </h3>
            <p className="text-align-center">
               Original aus der Schweiz
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,30???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Skipperknust" data-price="3.30" data-id="62">
            <div>
                <img src="./images/Geb??cke/Skipperknust.webp" alt="FRUIT"/>
            </div>
            <h3>
                Skipperknust
            </h3>
            <p className="text-align-center">
               Ein Brot, dessen Name genauso nordisch ist wie seine Herkunft.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,30???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        
        <div className="product-card" data-name="Sonnenblumenfeinbrot" data-price="2.90" data-id="63">
            <div>
                <img src="./images/Geb??cke/Sonnenblumenfeinbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sonnenblumenfeinbrot
            </h3>
            <p className="text-align-center">
               Ein sehr feines Brot mit einem Touch Sonnenblumenkerne.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,90???</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzuf??gen</button>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
