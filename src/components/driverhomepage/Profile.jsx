export default function Profile() {
  return (
    <div className="container mx-auto p-4">
      <div className="profile-card bg-white shadow-lg rounded-lg p-6 text-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="w-32 h-32 mx-auto rounded-full mb-4"
        />

        {/* Name and Job Info */}
        <h2 className="text-2xl font-bold mb-2">Jeremy Rose</h2>
        <p className="text-gray-600 mb-4">Product Designer, New York, NY</p>

        {/* Rating */}
        <div className="rating text-xl font-semibold text-yellow-500 mb-6">
          8.6 ★★★★★
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href="#"
            className="block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Send Message
          </a>
          <a
            href="#"
            className="block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
          >
            Contacts
          </a>
          <a
            href="#"
            className="block bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
          >
            Report User
          </a>
        </div>

        {/* Contact Information */}
        <div className="contact-info mt-8 text-left">
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <p className="mb-1">
            <strong>Phone:</strong> +1 123 456 7890
          </p>
          <p className="mb-1">
            <strong>Address:</strong> 525 E 68th Street, New York, NY
          </p>
          <p className="mb-1">
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@jeremyrose.com" className="text-blue-500">
              hello@jeremyrose.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Site:</strong>{' '}
            <a href="http://www.jeremyrose.com" className="text-blue-500">
              www.jeremyrose.com
            </a>
          </p>

          {/* Basic Information */}
          <h3 className="text-xl font-bold mb-2">Basic Information</h3>
          <p className="mb-1">
            <strong>Birthday:</strong> June 5, 1992
          </p>
          <p className="mb-1">
            <strong>Gender:</strong> Male
          </p>
        </div>
      </div>
    </div>
  );
}
