import React from 'react'

const categories = ["Electronics", "Fashion", "Home", "Books", "Sports"];

const Categories = () => {
    return (
        <div className="px-6 py-8">
            <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
            <div className="flex gap-4 overflow-x-auto">
                {categories.map((cat) => (
                    <div
                        key={cat}
                        className="min-w-[140px] bg-white shadow rounded-lg p-4 text-center cursor-pointer hover:shadow-md"
                    >
                        {cat}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
