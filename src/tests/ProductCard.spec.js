import { shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue"; // Path to your component

describe("ProductCard.vue", () => {
  let wrapper;
  const imageUrl = "http://test.com/test.jpg";
  const name = "Test Product";
  const price = "99.99";
  const currency = "TL";

  beforeEach(() => {
    wrapper = shallowMount(ProductCard, {
      propsData: { imageUrl, name, price, currency },
    });
  });

  it("renders props correctly", () => {
    expect(wrapper.find(".product-card__image").attributes("src")).toEqual(
      imageUrl
    );
    expect(wrapper.find(".product-card__title").text()).toEqual(name);
    expect(wrapper.find(".price").text()).toEqual(`${price} ${currency}`);
  });

  it("emits addToCart event when Add Basket button is clicked", async () => {
    await wrapper.find(".btn.add").trigger("click");
    expect(wrapper.emitted().addToCart).toBeTruthy();
    expect(wrapper.emitted().addToCart[0]).toEqual([
      {
        imageUrl: imageUrl,
        name: name,
        price: price,
        currency: currency,
      },
    ]);
  });
});
