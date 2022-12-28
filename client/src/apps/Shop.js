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
        <h3 className="catagory">Brötchen</h3>
        <h1 className="text-align-center" style={{display: "none"}} id="no_product_available">Es sind noch keine Produkte vorhanden!</h1>
        <section id="products_section" className="products_section">
        <div className="product-card" data-name="Ährenspitz" data-price="0.75" data-id="0">
            <div>
                <img src="./images/Gebäcke/Ährenspitz.webp" alt="FRUIT"/>
            </div>
            <h3>
                Ährenspitz
            </h3>
            <p className="text-align-center">
                Wie der Name schon sagt: Einsame Spitze.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Bauernbrötchen" data-price="0.60" data-id="1">
            <div>
                <img src="./images/Gebäcke/Bauernbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Bauernbrötchen
            </h3>
            <p className="text-align-center">
                Für Bauern und alle anderen ein Klassiker
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,60€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Dänisches Sesambrötchen" data-price="1.05" data-id="2">
        
            <div>
                <img src="./images/Gebäcke/Dänisches Sesambrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Dänisches Sesambrötchen
            </h3>
            <p className="text-align-center">
                Frisch aus Dänemark, äh Lübeck!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,05€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Dänischer Weißermohn" data-price="1.05" data-id="3">
            <div>
                <img src="./images/Gebäcke/Dänischer Weißermohn.webp" alt="FRUIT"/>
            </div>
            <h3>
                Dänischer Weißermohn
            </h3>
            <p className="text-align-center">
                Den Mohn gibt’s auch in weiß? Ja, klar!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,05€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Dinkelbrötchen" data-price="0.75" data-id="4">
            <div>
                <img src="./images/Gebäcke/Dinkelbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Dinkelbrötchen
            </h3>
            <p className="text-align-center">
                100% Dinkel, 100% lecker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Fitty" data-price="0.75" data-id="5">
            <div>
                <img src="./images/Gebäcke/Fitty.webp" alt="FRUIT"/>
            </div>
            <h3>
                Fitty
            </h3>
            <p className="text-align-center">
                Empfehlung von uns, hält fit!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Hörnchen" data-price="0.82" data-id="7">
            <div>
                <img src="./images/Gebäcke/Hörnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Hörnchen
            </h3>
            <p className="text-align-center">
                Ein Hörnchen? Nehmen sie lieber noch eins!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Kartoffelroggenbrötchen" data-price="0.75" data-id="8">
            <div>
                <img src="./images/Gebäcke/Kartoffelroggenbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kartoffelroggenbrötchen
            </h3>
            <p className="text-align-center">
                Kartoffel im Brötchen? Ja und es schmeckt auch noch.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Käsebrötchen" data-price="1" data-id="9">
            <div>
                <img src="./images/Gebäcke/Käsebrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Käsebrötchen
            </h3>
            <p className="text-align-center">
                Käse und Brötchen, das ist das Rezept für das perfekte Brötchen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Baguettebrötchen" data-price="1" data-id="10">
            <div>
                <img src="./images/Gebäcke/Baguettebrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Baguettebrötchen
            </h3>
            <p className="text-align-center">
                Ein sehr kleines Baguette, das gibt es auch in groß.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Kornknacker" data-price="0.75" data-id="11">
            <div>
                <img src="./images/Gebäcke/Kornknacker.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kornknacker
            </h3>
            <p className="text-align-center">
                Unsere Empfehlung, schmeckt einfach gut.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>


        <div className="product-card" data-name="Kümmelring" data-price="0.83" data-id="12">
            <div>
                <img src="./images/Gebäcke/Kümmelring.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kümmelring
            </h3>
            <p className="text-align-center">
                Ein Muss für jeden Kümmelliebhaber.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,83€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Kümmelstange" data-price="0.83" data-id="13">
            <div>
                <img src="./images/Gebäcke/Kümmelstange.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kümmelstange
            </h3>
            <p className="text-align-center">
                Ein Muss für jeden Kümmelliebhaber.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,83€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Kürbiskernbrötchen" data-price="0.75" data-id="14">
            <div>
                <img src="./images/Gebäcke/Kürbiskernbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kürbiskernbrötchen
            </h3>
            <p className="text-align-center">
                Große Kerne mit großartigem Geschmack.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Sonnenblumenkernbrötchen" data-price="0.75" data-id="15">
            <div>
                <img src="./images/Gebäcke/Sonnenblumkernbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sonnenblumenkernbrötchen
            </h3>
            <p className="text-align-center">
                Das Brötchen ist nicht nur ein Augenschmaus.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Laugenbrötchen" data-price="1.10" data-id="16">
            <div>
                <img src="./images/Gebäcke/Laugenbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenbrötchen
            </h3>
            <p className="text-align-center">
                Das klassische Laugenbrötchen zum Genießen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,10€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Laugencroissant" data-price="1.30" data-id="17">
            <div>
                <img src="./images/Gebäcke/Laugencroissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugencroissant
            </h3>
            <p className="text-align-center">
                Ein Laugencroissant zum reinbeißen, was auch sonst.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Laugenstange" data-price="1.25" data-id="18">
            <div>
                <img src="./images/Gebäcke/Laugenstange.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenstange
            </h3>
            <p className="text-align-center">
                Empfehlung von uns, beliebt bei jedermann.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,25€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

         <div className="product-card" data-name="Laugenstange mit Körnern" data-price="1.30" data-id="19">
            <div>
                <img src="./images/Gebäcke/Laugenstange mit Körnern.webp" alt="FRUIT"/>
            </div>
            <h3>
                Laugenstange mit Körnern
            </h3>
            <p className="text-align-center">
                Eine Laugenstange mit leckeren Körnern.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

         <div className="product-card" data-name="Mittagsbrötchen" data-price="0.50" data-id="20">
            <div>
                <img src="./images/Gebäcke/Mittagsbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mittagsbrötchen
            </h3>
            <p className="text-align-center">
                Zum Frühstück und zum Mittag, aber eigentlich auch zum Abendbrot gut.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,50€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

        <div className="product-card" data-name="Mohnhörnchen" data-price="0.82" data-id="22">
            <div>
                <img src="./images/Gebäcke/Mohnhörnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnhörnchen
            </h3>
            <p className="text-align-center">
                Schmeckt noch besser als es aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>

       <div className="product-card" data-name="Mohnbrötchen" data-price="0.58" data-id="23">
            <div>
                <img src="./images/Gebäcke/Mohnbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnbrötchen
            </h3>
            <p className="text-align-center">
                Tipp von den SemmelBrothers. Mit Honig schmeckt es noch besser.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,58€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>


        <div className="product-card" data-name="Pikanter Softie" data-price="0.90" data-id="24">
            <div>
                <img src="./images/Gebäcke/Pikantersoftie.webp" alt="FRUIT"/>
            </div>
            <h3>
                Pikanter Softie
            </h3>
            <p className="text-align-center">
                Pikant und für jedes Frühstück unersetzlich.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,90€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Roggenbrötchen" data-price="0.63" data-id="25">
            <div>
                <img src="./images/Gebäcke/Roggenbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Roggenbrötchen
            </h3>
            <p className="text-align-center">
                Einfach ein Roggenbrötchen ohne viel Schnickschnack
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,63€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        
        <div className="product-card" data-name="Rosinenbrötchen" data-price="0.95" data-id="26">
            <div>
                <img src="./images/Gebäcke/Rosinenbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenbrötchen
            </h3>
            <p className="text-align-center">
                Ein süßes Milchbrötchen mit Rosinen, das ist das Geheimnis.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,95€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Schnittbrötchen" data-price="0.43" data-id="27">
            <div>
                <img src="./images/Gebäcke/Schnittbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schnittbrötchen
            </h3>
            <p className="text-align-center">
                Der Klassiker für jeden Anwendungsfall.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,43€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        
        <div className="product-card" data-name="Schrotling" data-price="0.75" data-id="28">
            <div>
                <img src="./images/Gebäcke/Schrotling.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schrotling
            </h3>
            <p className="text-align-center">
                Ein Brötchen wie kein zweites.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,75€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        
        <div className="product-card" data-name="Sesamhörnchen" data-price="0.82" data-id="29">
            <div>
                <img src="./images/Gebäcke/Sesamhörnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sesamhörnchen
            </h3>
            <p className="text-align-center">
                Ein Post-Sesamhörnchen aus der Ferne ruft nach dir.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,82€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        
        <div className="product-card" data-name="Sesambrötchen" data-price="0.58" data-id="30">
            <div>
                <img src="./images/Gebäcke/Sesambrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sesambrötchen
            </h3>
            <p className="text-align-center">
                Ein Brötchen so gut wie jedes andere, aber mit Sesam!
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,58€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div id="cef"><h3 className="catagory">Croissant</h3></div>
        
        <div className="product-card" data-name="Croissant" data-price="1.30" data-id="31">
            <div>
                <img src="./images/Gebäcke/Croissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                Croissant
            </h3>
            <p className="text-align-center">
                Ein kleines Stück Frankreich für Zuhause.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,30€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Käsecroissant" data-price="1.70" data-id="32">
            <div>
                <img src="./images/Gebäcke/Käsecroissant.webp" alt="FRUIT"/>
            </div>
            <h3>
                Käsecroissant
            </h3>
            <p className="text-align-center">
                Ein Croissant mit Käse, was braucht man dann denn noch?
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Schokocroissant" data-price="1.60" data-id="33">
            <div>
                <img src="./images/Gebäcke/Schokocroissants.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schokocroissant
            </h3>
            <p className="text-align-center">
                Ein Croissant veredelt mit Schokolade.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,60€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div id="cef"><h3 className="catagory">Süßwaren</h3></div>
        
        <div className="product-card" data-name="Apfelecke" data-price="1.95" data-id="34">
            <div>
                <img src="./images/Gebäcke/Apfelecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Apfelecke
            </h3>
            <p className="text-align-center">
                Eine Ecke mit einem Apfel… oder?
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,95€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="gedeckter Apfelkuchen" data-price="1.85" data-id="35">
            <div>
                <img src="./images/Gebäcke/gedeckter Apfelkuchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                gedeckter Apfelkuchen
            </h3>
            <p className="text-align-center">
                Schmeckt noch leckerer als es aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,85€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Eisenbahnschiene" data-price="1.70" data-id="36">
            <div>
                <img src="./images/Gebäcke/Bahnschienen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Bahnschienen
            </h3>
            <p className="text-align-center">
                Zum Glück sind diese hier nicht aus Eisen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Kirschkopenhagener" data-price="3.50" data-id="37">
            <div>
                <img src="./images/Gebäcke/Kirschkopenhagener.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kirschkopenhagener
            </h3>
            <p className="text-align-center">
                Aus Lübeck sogar noch leckerer als aus Kopenhagen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,50€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Hanseaten Herz" data-price="1.40" data-id="38">
            <div>
                <img src="./images/Gebäcke/Hanseaten Herz.webp" alt="FRUIT"/>
            </div>
            <h3>
                Hanseaten Herz
            </h3>
            <p className="text-align-center">
                Ein Herz aus Gold, oder Zucker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,40€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Hanseaten Taler" data-price="1.20" data-id="39">
            <div>
                <img src="./images/Gebäcke/Hanseaten Taler.webp" alt="FRUIT"/>
            </div>
            <h3>
                Hanseaten Taler
            </h3>
            <p className="text-align-center">
                Ist mehr wert als sein Kaufpreis.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,20€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Himbeer Muffin" data-price="1.65" data-id="40">
            <div>
                <img src="./images/Gebäcke/Himbeer Muffin.webp" alt="FRUIT"/>
            </div>
            <h3>
                Himbeer Muffin
            </h3>
            <p className="text-align-center">
                Die Puderzuckerkrone sagt doch eigentlich alles.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,65€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Kirschecke" data-price="1.95" data-id="41">
            <div>
                <img src="./images/Gebäcke/Kirschecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kirschecke
            </h3>
            <p className="text-align-center">
                Für die Süßen unter uns die perfekte Wahl.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,95€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Schrägstück" data-price="1.70" data-id="42">
            <div>
                <img src="./images/Gebäcke/Schrägstück.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schrägstück
            </h3>
            <p className="text-align-center">
                Ein Stück reicht völlig aus, um sie vom Hocker zu hauen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Mandelhörnchen" data-price="2.10" data-id="43">
            <div>
                <img src="./images/Gebäcke/Mandelhörnchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mandelhörnchen
            </h3>
            <p className="text-align-center">
                Aus Lübeck und Marzipan? Das kann nur gut werden.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,10€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Milchmaus" data-price="1.20" data-id="44">
            <div>
                <img src="./images/Gebäcke/Milchmaus.webp" alt="FRUIT"/>
            </div>
            <h3>
                Milchmaus
            </h3>
            <p className="text-align-center">
                Sie schmeckt so süß, wie sie aussieht.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,20€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Milchbrötchen" data-price="0.90" data-id="45">
            <div>
                <img src="./images/Gebäcke/Milchbrötchen.webp" alt="FRUIT"/>
            </div>
            <h3>
                Milchbrötchen
            </h3>
            <p className="text-align-center">
                Das klassische Milchbrötchen
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 0,90€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Mohnschnitte" data-price="1.70" data-id="46">
            <div>
                <img src="./images/Gebäcke/Mohnschnitte.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnschnitte
            </h3>
            <p className="text-align-center">
                Ein Genuss für Groß und Klein
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Ochsenauge" data-price="1.50" data-id="47">
            <div>
                <img src="./images/Gebäcke/Ochsenauge.webp" alt="FRUIT"/>
            </div>
            <h3>
                Ochsenauge
            </h3>
            <p className="text-align-center">
                Ein Blickfang für jedes Auge.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,50€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Puddingbrezel" data-price="1.70" data-id="48">
            <div>
                <img src="./images/Gebäcke/Puddingbrezel.webp" alt="FRUIT"/>
            </div>
            <h3>
                Puddingbrezel
            </h3>
            <p className="text-align-center">
                Eine Brezel der anderen Art.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Rosinenschnecke" data-price="1.70" data-id="49">
            <div>
                <img src="./images/Gebäcke/Rosinenschnecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenschnecke
            </h3>
            <p className="text-align-center">
                Eine der süßesten Schnecken, die ihnen begegnen wird.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Schokomuffin" data-price="1.65" data-id="50">
            <div>
                <img src="./images/Gebäcke/Schokomuffin.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schokomuffin
            </h3>
            <p className="text-align-center">
                Ein purer Schokogenuss für den Gaumen.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,65€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Schweineohr" data-price="1.70" data-id="51">
            <div>
                <img src="./images/Gebäcke/Schweineohr.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schweineohr
            </h3>
            <p className="text-align-center">
               Nicht aus Fleisch, aber dafür guter Geschmack garantiert.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Mohnschnecke" data-price="1.70" data-id="52">
            <div>
                <img src="./images/Gebäcke/Mohnschnecke.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnschnecke
            </h3>
            <p className="text-align-center">
               Eine sehr süße Schnecke, ohne Debatte.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        <div className="product-card" data-name="Zitronenscheibe" data-price="2.00" data-id="53">
            <div>
                <img src="./images/Gebäcke/Zitronenscheibe.webp" alt="FRUIT"/>
            </div>
            <h3>
                Zitronenscheibe
            </h3>
            <p className="text-align-center">
               Der Lieblingskuchen der SemmelBrothers
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,00€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Rumschnitte" data-price="1.60" data-id="54">
            <div>
                <img src="./images/Gebäcke/Rumschnitte.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rumschnitte
            </h3>
            <p className="text-align-center">
               Eine heiße Schnitte für Erwachsene.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 1,60€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        
         <div id="cef"><h3 className="catagory">Brot</h3></div>
         
         <div className="product-card" data-name="Feinbrot" data-price="3.50" data-id="55">
            <div>
                <img src="./images/Gebäcke/Feinbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Feinbrot
            </h3>
            <p className="text-align-center">
               500 Gramm Genuss in jedem Laib.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,50€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Holsteiner Landbrot" data-price="3.40" data-id="56">
            <div>
                <img src="./images/Gebäcke/Holsteiner Landbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Holsteiner Landbrot
            </h3>
            <p className="text-align-center">
               Das Brot aus der Heimat.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,40€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Kartoffelkruste" data-price="3.70" data-id="57">
            <div>
                <img src="./images/Gebäcke/Kartoffelkruste.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kartoffelkruste
            </h3>
            <p className="text-align-center">
               So eine Kruste sieht man kein 2. Mal.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Kosakenbrot" data-price="3.40" data-id="58">
            <div>
                <img src="./images/Gebäcke/Kosakenbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Kosakenbrot
            </h3>
            <p className="text-align-center">
               Ein Klassiker.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,40€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Mohnzopf" data-price="3.60" data-id="59">
            <div>
                <img src="./images/Gebäcke/Mohnzopf.webp" alt="FRUIT"/>
            </div>
            <h3>
                Mohnzopf
            </h3>
            <p className="text-align-center">
               Ein Muss auf jedem Frühstückstisch.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,60€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
         <div className="product-card" data-name="Rosinenstute" data-price="3.70" data-id="60">
            <div>
                <img src="./images/Gebäcke/Rosinenstute.webp" alt="FRUIT"/>
            </div>
            <h3>
                Rosinenstute
            </h3>
            <p className="text-align-center">
               Die schönsten Stuten unseres Bäckers.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,70€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Schweizer Landbrot" data-price="3.30" data-id="61">
            <div>
                <img src="./images/Gebäcke/Schweizer Landbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Schweizer Landbrot
            </h3>
            <p className="text-align-center">
               Original aus der Schweiz
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,30€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Skipperknust" data-price="3.30" data-id="62">
            <div>
                <img src="./images/Gebäcke/Skipperknust.webp" alt="FRUIT"/>
            </div>
            <h3>
                Skipperknust
            </h3>
            <p className="text-align-center">
               Ein Brot, dessen Name genauso nordisch ist wie seine Herkunft.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 3,30€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        
        <div className="product-card" data-name="Sonnenblumenfeinbrot" data-price="2.90" data-id="63">
            <div>
                <img src="./images/Gebäcke/Sonnenblumenfeinbrot.webp" alt="FRUIT"/>
            </div>
            <h3>
                Sonnenblumenfeinbrot
            </h3>
            <p className="text-align-center">
               Ein sehr feines Brot mit einem Touch Sonnenblumenkerne.
            </p>
            <a href="./allergene.html" className="allergene">Allergene</a>
            <p><b>Preis: 2,90€</b></p>
            <div>
                <input className="primary_input" type="number" placeholder="Anzahl"/>
            </div>
            <button className="primary_btn m-y-15" onClick={(event) => addToCart(event)}>Zum Warenkorb hinzufügen</button>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
