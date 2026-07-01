import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import DoctorCard from "../components/DoctorCard"
import DoctorCardSkeleton from "../components/skeletons/DoctorCardSkeleton"

import { useDebounce } from "../hooks/useDebounce"
import { useDoctorsSearch } from "../hooks/useDoctorsSearch"

export default function SearchResults() {

  const [searchParams, setSearchParams] = useSearchParams()

  const [name, setName] = useState(searchParams.get("name") || "")
  const [city, setCity] = useState(searchParams.get("city") || "")
  const [specialty, setSpecialty] = useState(searchParams.get("specialty") || "")
  const [sort, setSort] = useState(searchParams.get("sort") || "")

  const [page, setPage] = useState(1)

  const limit = 6

  const debouncedName = useDebounce(name, 500)

  useEffect(() => {

    setSearchParams({
      name: debouncedName,
      city,
      specialty,
      sort
    })

  }, [debouncedName, city, specialty, sort])

  useEffect(() => {

    setPage(1)

  }, [debouncedName, city, specialty, sort])


  const {

    data,
    isLoading,
    isError,
    error,

  } = useDoctorsSearch({

    name: debouncedName,
    city,
    specialty,
    sort,
    page,
    limit

  })


  const doctors = data?.data || []

  const total = data?.total || 0

  const totalPages = Math.ceil(total / limit)


  if (isError) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-red-500">

            خطا در دریافت پزشکان

          </h2>

          <p className="text-gray-500 mt-2">

            {(error as Error).message}

          </p>

        </div>

      </div>

    )

  }


  return (

    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl font-black mb-8">

          جستجوی پزشکان

        </h1>


        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <input
            placeholder="نام پزشک"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            placeholder="شهر"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            placeholder="تخصص"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >

            <option value="">مرتب سازی</option>
            <option value="rate">بهترین امتیاز</option>
            <option value="reviews">بیشترین نظر</option>

          </select>

        </div>


        {isLoading && (

          <div className="grid md:grid-cols-2 gap-6">

            {Array.from({ length: 6 }).map((_, index) => (

              <DoctorCardSkeleton key={index} />

            ))}

          </div>

        )}


        {!isLoading && doctors.length > 0 && (

          <div className="grid md:grid-cols-2 gap-6">

            {doctors.map((doctor) => (

              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />

            ))}

          </div>

        )}


        {!isLoading && doctors.length === 0 && (

          <div className="text-center text-gray-500 mt-20">

            پزشکی با این مشخصات پیدا نشد

          </div>

        )}


        {!isLoading && totalPages > 1 && (

          <div className="flex justify-center gap-2 mt-10">

            {Array.from({ length: totalPages }).map((_, index) => {

              const pageNumber = index + 1

              return (

                <button
                  key={pageNumber}
                  onClick={() => {

                    setPage(pageNumber)

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    })

                  }}
                  className={`px-4 py-2 rounded-lg border

                  ${page === pageNumber
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                    }`}
                >

                  {pageNumber}

                </button>

              )

            })}

          </div>

        )}

      </div>

    </div>

  )

}
