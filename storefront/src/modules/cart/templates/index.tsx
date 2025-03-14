import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="flex-1 px-5 py-5 max-w-2xl mx-auto w-full" data-testid="cart-container">
      {cart?.items?.length ? (
        <div className="flex flex-col">
          {/* Cart Items */}
          <div className="flex-1">
            <ItemsTemplate items={cart?.items} />
          </div>
          
          {/* Cart Summary */}
          <div className="mt-8">
            {cart && cart.region && (
              <Summary cart={cart as any} />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-xl font-mono uppercase">Your cart is empty</h2>
          <p className="text-sm text-black/70 mt-2 font-mono">Add items to your cart to continue shopping</p>
        </div>
      )}
    </div>
  )
}

export default CartTemplate
