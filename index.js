 const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://dummyjson.com/products", true);
        xhr.onload = function() {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                console.log(response);

                const productsContainer = document.getElementById('products');
                productsContainer.innerHTML = ''; 

                response.products.forEach(product => {  
                    const card = document.createElement('div');
                    card.className = 'product';

               card.innerHTML = `
                        <img class="main" src="${product.thumbnail}" alt="${product.title}">
                        <div class="details">
                          <h3>${product.title} <span class="meta">(${product.brand})</span></h3>
                          <p class="meta">${product.category}  Rating: ${product.rating}</p>
                          <p><strong>Price:</strong> $${product.price} <small class="meta">(${product.discountPercentage}% off)</small></p>
                          <p class="meta">Stock: ${product.stock}</p>
                      
                        </div>
                    `;

                    productsContainer.appendChild(card);
                });

            } else {
                console.error('Products load failed; status:', this.status);
            }
        };
        xhr.onerror = function(){
             console.error('Network error while requesting products');
             };
        xhr.send();