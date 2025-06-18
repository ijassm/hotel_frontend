import { useState } from "react";
import { CardItem } from "./components/CardItem";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Pagination } from "../shared/ui/Pagination";
import { Form } from "./components/Form";
import { ModalProvider, useModal } from "./contexts";

const cardData = Array.from({ length: 12 }, (_, i) => ({
  imageUrl:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b2/73/d0/front-view.jpg?w=1200&h=-1&s=1",
  name: `Sunset Paradise Resort #${i + 1}`,
  description:
    "A beautiful seaside resort offering luxurious rooms and unforgettable sunset views. Perfect for a relaxing getaway. Enjoy our top-notch amenities and personalized service.",
}));

const CARDS_PER_PAGE = 4;

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  // const { isOpen, closeModal } = useModal();

  const totalPages = Math.ceil(cardData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = cardData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <Form type="create" />

      <main className="flex max-w-4xl mx-auto py-5 space-y-6 gap-6">
        <Filter />
        <main>
          <Header />
          <section className="space-y-4">
            {currentCards.map((card, index) => (
              <CardItem
                id={`card-item-${index}`}
                key={index}
                imageUrl={card.imageUrl}
                name={card.name}
                description={card.description}
              />
            ))}
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
          />
        </main>
      </main>
    </>
  );
}
