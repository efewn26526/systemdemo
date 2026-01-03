console.log("图书管理")



const book_list = [
    {
        id:"1",
        book_name:"我的魔鬼老公",
    },
    {
        id:"2",
        book_name:"纯情丫头超火辣",
    },
    {
        id:"3",
        book_name:"我是公主",
    }
]
let books = JSON.parse(localStorage.getItem('books')) || [];
        let editIndex = -1;

        // 获取DOM元素
        const bookNameInput = document.getElementById('bookName');
        const bookAuthorInput = document.getElementById('bookAuthor');
        const addBtn = document.getElementById('addBtn');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const resetBtn = document.getElementById('resetBtn');
        const bookTable = document.getElementById('bookTable');

        function renderBooks(data = books) {
            bookTable.innerHTML = '';
            data.forEach((book, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>
                        <button class="edit-btn" onclick="editBook(${index})">修改</button>
                        <button class="delete-btn" onclick="deleteBook(${index})">删除</button>
                    </td>
                `;
                bookTable.appendChild(tr);
            });
            localStorage.setItem('books', JSON.stringify(books));
        }

        addBtn.addEventListener('click', () => {
            const name = bookNameInput.value.trim();
            const author = bookAuthorInput.value.trim();
            if (!name || !author) {
                alert('图书名称和作者不能为空！');
                return;
            }
            if (editIndex === -1) {
                books.push({ name, author });
            } else {
                books[editIndex] = { name, author };
                editIndex = -1;
                addBtn.textContent = '添加图书';
            }
            bookNameInput.value = '';
            bookAuthorInput.value = '';
            renderBooks();
        });

        function editBook(index) {
            const book = books[index];
            bookNameInput.value = book.name;
            bookAuthorInput.value = book.author;
            editIndex = index;
            addBtn.textContent = '保存修改';
        }

        function deleteBook(index) {
            if (confirm('确定要删除这本图书吗？')) {
                books.splice(index, 1);
                renderBooks();
            }
        }

        searchBtn.addEventListener('click', () => {
            const keyword = searchInput.value.trim().toLowerCase();
            if (!keyword) {
                renderBooks();
                return;
            }
            const filteredBooks = books.filter(book => 
                book.name.toLowerCase().includes(keyword) || 
                book.author.toLowerCase().includes(keyword)
            );
            renderBooks(filteredBooks);
        });

        resetBtn.addEventListener('click', () => {
            searchInput.value = '';
            renderBooks();
        });
        window.onload = renderBooks;
