import TinderCard from 'react-tinder-card';
import { useMatchStore } from '../store/useMatchStore';

const SwipeArea = () => {
  const { userProfiles, swipeRight, swipeLeft } = useMatchStore();

  const handleSwipe = (dir, user) => {
    if (dir === 'right') swipeRight(user);
    else if (dir === 'left') swipeLeft(user);
  };

  return (
    <div className="relative w-full max-w-[28rem] h-[36rem] flex items-start justify-center">
      {userProfiles.map((user, index) => {
        const zIndex = userProfiles.length - index; // higher index -> lower zIndex
        return (
          <TinderCard
            className="absolute top-4 left-[25%] -translate-x-1/2 md:left-1/2"
            key={user._id}
            onSwipe={(dir) => handleSwipe(dir, user)}
            swipeRequirementType="position"
            swipeThreshold={100}
            preventSwipe={['up', 'down']}
            style={{ zIndex }}
          >
            <div className="card bg-white/80 backdrop-blur-sm w-[28rem] h-[36rem] select-none rounded-2xl overflow-hidden border border-gray-100 shadow-md transition-transform duration-300 transform hover:scale-105">
              <div className="relative h-4/5 w-full bg-gray-100">
                <img
                  src={user.image || '/avatar.png'}
                  alt={user.name}
                  className="w-full h-full object-cover pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute left-5 bottom-5 text-white">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold leading-tight drop-shadow">
                      {user.name}
                    </h2>
                    <span className="text-sm font-medium bg-white/20 px-2 py-0.5 rounded-lg">
                      {user.age}
                    </span>
                  </div>
                  {user.location && (
                    <p className="text-sm opacity-90 mt-1">{user.location}</p>
                  )}
                </div>
              </div>

              <div className="card-body bg-white p-5 h-1/5">
                <p className="text-gray-700 text-sm max-h-16 overflow-hidden">
                  {user.bio}
                </p>
              </div>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
};
export default SwipeArea;
