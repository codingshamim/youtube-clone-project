const ulContainer = document.querySelector(".ulContainer");
const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Science" },
  { id: 3, name: "Health" },
  { id: 4, name: "Education" },
  { id: 5, name: "Travel" },
  { id: 6, name: "Food" },
  { id: 7, name: "Sports" },
  { id: 8, name: "Finance" },
  { id: 9, name: "Entertainment" },
  { id: 10, name: "Fashion" },
  { id: 11, name: "Music" },
  { id: 12, name: "Art" },
  { id: 13, name: "History" },
  { id: 14, name: "Politics" },
  { id: 15, name: "Business" },
  { id: 16, name: "Lifestyle" },
  { id: 17, name: "Environment" },
  { id: 18, name: "Gaming" },
  { id: 19, name: "Photography" },
  { id: 20, name: "Writing" },
];
categories.forEach((el) => {
  const element = document.createElement("li");
  element.innerHTML = `  <li class="px-4 min-w-[60px] h-[35px] flex justify-center items-center rounded-sm dark:bg-secondaryBg bg-secondaryBgWhite">
                <a href="#" class="dark:text-white text-black">${el?.name}</a>
              </li>`;

  ulContainer.appendChild(element);
});
