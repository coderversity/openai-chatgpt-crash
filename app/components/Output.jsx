'use client';

import Loading from "../loading";

const Output = (props) => {
    const { contentType, results, loading } = props;

    return (
        <section className="output">
            {results?.data ? (
                <div className="h-screen">
                    {contentType === 'text' ? (
                        <p>{results?.data}</p>
                    ) : contentType === 'image' && (
                        <div className="w-full">
                            {results.data?.map((imageUrl, index) => (
                                <div key={index}>
                                    <img src={imageUrl} alt='photo' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : loading ? (
                <Loading />
            ) : results?.error ? (
                <p className="text-xl text-red-600">{results.error}</p>
            ) : (
                <p className="text-xl">Please select a content type.</p>
            )}
        </section>
    )
}

export default Output