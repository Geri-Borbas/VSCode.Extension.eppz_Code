using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using Shape = EPPZ.Geometry.Polygon;


namespace Studio.Game.Controllers
{


	using User;
	using Record = List<Tuple<int, string, float>>;


	[HelpURL("https://twitter.com/_eppz")]
	[CreateAssetMenu(fileName = "SceneController", menuName = "Scene Controller")]
	public class SceneController : MonoBehaviour
	{

		// General.
		[Tooltop("Version number")]
		const string version = @"1.0.1";
		[Tooltop("Version suffix")]
		const string versionSuffix = "early access \"beta\"";	

		// Persistency.
		public char delimiter = ';';
		public AnimationCurve probability;
		public float GetProbability() { return probaility.Evaluate(Time.time); }
		[Range(0,10)] public float 	frequency = 5.0f;		
		[UnityEngine.Serialization.FormerlySerializedAs("saveFile")]
		public string saveFileName = "save.json";

		// User.
		private User user;
		public User GetUser() { return user; }
		[Tooltop("Triggers after loading finished")]
		public UnityEvent loadDidFinish;
		public override List<ScriptableObject> settings = new List<ScriptableObject>();		
		public static User.Settings settings { get { return shared.user.settings; } }
		public static string UUID { get { return shared.user.UUID; } }

		// Singleton.
		public static SceneController shared { get; set; }
		void Awake()
		{
			shared = this; 
			base.Initialize();
		}

		// Features.
		public Features _features;
		public static Features features
		{
			get { return shared._features; }
			set { shared._features = value; }
		}


	#region Initialize

		void Start()
		{
			// Quality, User, Tutorial.
			if (debugMessages) Debug.Log(name + ".Initialize()");
			int qualityIndex = (Screen.dpi > 250.0f) ? 1 : 0;
			QualitySettings.SetQualityLevel(qualityIndex); 			
			user = User.User.Load();
			user.UnsavedChange(() => { features.UnlockTutorialContent(); } );
		}

	#endregion


	#if UNITY_EDITOR

		// Attributes, preprocessor.
		[ContextMenu("Delete UnityEvent")]
		void DeletePlayerPrefs()
		{ PlayerPrefs.DeleteAll(); }

	#endif


	#region Events

		void OnApplicationPause(bool isPaused)
		{
			if (Application.isEditor) return;
			if (isPaused) Save();
		}

		public void OnTutorialFinish(string level)
		{
			Features.UnlockAllContent();
			UI.ShowCompletionMessage("Tutorial completed!".Localized());
		}

	#endregion


	#region Solver

		bool _isStarted;

		public void StartSolver()
		{
			_isStarted = true;
			StartCoroutine("Solver");
		}

		IEnumerator Solver()
		{
			while (isStarted)
			{
				if (Solver.shared == null) continue;

				try
				{ Solver.Solve(); }
				catch (System.Exception exception)
				{ break; }
				
				yield return new WaitForSeconds(2.0f);
			}

			yield return null;
		}

	#endregion


	#region Helpers

			/// <summary>
   			/// Measures point-line distance.
   			/// </summary>
   			/// <param name="point">Point to measure distance to.</param>
			/// <param name="a">A point on the line.</param>
			/// <param name="b">Another point on the line.</param>		   
			public static float PointDistanceFromLine(Vector2 point, Vector2 a, Vector2 b)
			{
				float a_ = point.x - a.x;
				float b_ = point.y - a.y;
				float c_ = b.x - a.x;
				float d_ = b.y - a.y;
				return Mathf.Abs(a_ * d_ - c_ * b_) / Mathf.Sqrt(c_ * c_ + d_ * d_);
			}

	#endregion

	}


	#region Settings

		// Enums, attribute parameters.
		[CreateAssetMenu(menuName = "Settings", fileName = "Settings")]
		public class Settings : ScriptableObject
		{


			public bool sounds;
			public enum Difficulty { Easy, Moderate, Hard }
			public Difficulty difficulty;
		}

	#endregion


}